// Common type definitions

export interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CtaButton {
  label: string;
  link: string;
  variant: 'primary' | 'secondary';
}

export interface RouteConfig {
  path: string;
  name: string;
  component: () => Promise<any>;
  meta?: RouteMeta;
}

export interface RouteMeta {
  title?: string;
  requiresAuth?: boolean;
}

export type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';
