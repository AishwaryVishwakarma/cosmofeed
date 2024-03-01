export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  navbar?: {
    show: boolean;
    styles?: string;
  };
  footer?: {
    show: boolean;
    styles?: string;
  };
  layouted?: boolean;
}
