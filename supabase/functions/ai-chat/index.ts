import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();

    console.log('AI Chat request received:', { message, historyLength: conversationHistory.length });

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const messages = [
      {
        role: 'system',
        content: `You are a helpful AI assistant for System One Ltd, a technology company in Kenya that specializes in educational technology solutions. 

Key information about System One Ltd:
- Founded in 2019
- Specializes in educational technology solutions for higher learning institutions
- Main products include CampusCURA ERP, Library Radar, Smart Biometrics, and Digital Payment solutions
- Has partnerships with universities like Karatina University, Kibabii University, Maasai Mara University, University of Embu, Tharaka University, Machakos University, and technical institutes
- Contact: info@systemoneltd.com, +254 7XX XXX XXX
- Website focuses on innovation, reliability, and transforming education through technology

Be friendly, professional, and helpful. Answer questions about the company's services, but if asked about specific technical details you don't have information about, suggest they contact the company directly.`
      },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    console.log('AI response generated successfully');

    return new Response(JSON.stringify({ 
      response: aiResponse,
      conversationHistory: [...conversationHistory, 
        { role: 'user', content: message },
        { role: 'assistant', content: aiResponse }
      ]
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in AI chat function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to process chat request' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});