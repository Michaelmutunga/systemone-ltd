import { lazy, type ComponentType, type LazyExoticComponent } from "react";

type PreloadableComponent<T extends ComponentType<Record<string, never>>> = LazyExoticComponent<T> & {
  preload: () => Promise<{ default: T }>;
};

export function lazyWithPreload<T extends ComponentType<Record<string, never>>>(
  factory: () => Promise<{ default: T }>,
): PreloadableComponent<T> {
  const component = lazy(factory) as PreloadableComponent<T>;
  component.preload = factory;
  return component;
}
