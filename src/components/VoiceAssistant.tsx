import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Vapi from "@vapi-ai/web";

const VAPI_PUBLIC_KEY =
  import.meta.env.VITE_VAPI_PUBLIC_KEY ?? "57182b75-41d7-4e9a-bc69-525e7f9b39fd";
const VAPI_ASSISTANT_ID =
  import.meta.env.VITE_VAPI_ASSISTANT_ID ?? "4260e990-ee15-4011-bb20-28674ba25c2a";

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [callStatus, setCallStatus] = useState<string>("Idle");
  const { toast } = useToast();

  useEffect(() => {
    const vapiInstance = new Vapi(VAPI_PUBLIC_KEY);
    setVapi(vapiInstance);

    vapiInstance.on("call-start", () => {
      setIsCallActive(true);
      setCallStatus("Connected");
      toast({
        title: "Call Started",
        description: "Voice assistant is now active",
      });
    });

    vapiInstance.on("call-end", () => {
      setIsCallActive(false);
      setCallStatus("Call Ended");
      toast({
        title: "Call Ended",
        description: "Voice assistant disconnected",
      });
    });

    vapiInstance.on("speech-start", () => {
      setCallStatus("Assistant Speaking");
    });

    vapiInstance.on("speech-end", () => {
      setCallStatus("Listening");
    });

    vapiInstance.on("error", (error) => {
      console.error("Vapi error:", error);
      toast({
        title: "Error",
        description: error.message || "An error occurred with the voice assistant",
        variant: "destructive",
      });
    });

    return () => {
      vapiInstance.stop();
    };
  }, [toast]);

  const startCall = async () => {
    if (!vapi) return;

    try {
      setCallStatus("Connecting...");
      await vapi.start(VAPI_ASSISTANT_ID);
    } catch (error) {
      console.error("Failed to start call:", error);
      setCallStatus("Failed to Connect");
      toast({
        title: "Connection Failed",
        description: "Could not start the voice assistant",
        variant: "destructive",
      });
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
      setIsCallActive(false);
      setCallStatus("Idle");
    }
  };

  const toggleMute = () => {
    if (vapi && isCallActive) {
      vapi.setMuted(!isMuted);
      setIsMuted(!isMuted);
      toast({
        title: isMuted ? "Microphone On" : "Microphone Off",
        description: isMuted ? "You can now speak" : "Microphone muted",
      });
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90"
        size="icon"
      >
        {isCallActive ? <Phone className="h-6 w-6 animate-pulse" /> : <Mic className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 shadow-xl z-40 p-6">
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Voice Assistant</h3>
              <p className="text-sm text-muted-foreground">{callStatus}</p>
            </div>

            <div className="flex flex-col gap-3">
              {!isCallActive ? (
                <Button onClick={startCall} className="w-full" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Start Call
                </Button>
              ) : (
                <>
                  <Button onClick={toggleMute} variant="outline" className="w-full" size="lg">
                    {isMuted ? (
                      <>
                        <MicOff className="h-5 w-5 mr-2" />
                        Unmute
                      </>
                    ) : (
                      <>
                        <Mic className="h-5 w-5 mr-2" />
                        Mute
                      </>
                    )}
                  </Button>
                  <Button onClick={endCall} variant="destructive" className="w-full" size="lg">
                    <PhoneOff className="h-5 w-5 mr-2" />
                    End Call
                  </Button>
                </>
              )}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default VoiceAssistant;
