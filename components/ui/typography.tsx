interface Typography {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "quote" | "code" | "lead" | "small" | "large" | "muted" | "underline";
}

const Typography = ({ children, className, variant, style }: Typography) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`} style={style}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`} style={style}>
          {children}
        </h2>
      );
    case "underline":
      return (
        <h2 className={`scroll-m-20 pb-2 tracking-tight first:mt-0 ${className}`} style={style}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`} style={style}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`} style={style}>
          {children}
        </h4>
      );
    case "p":
      return (
        <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`} style={style}>
          {children}
        </p>
      );
    case "quote":
      return (
        <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`} style={style}>
          {children}
        </blockquote>
      );
    case "code":
      return (
        <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`} style={style}>
          {children}
        </code>
      );
    case "lead":
      return (
        <p className={`text-xl text-muted-foreground ${className}`} style={style}>
          {children}
        </p>
      );
    case "large":
      return (
        <div className={`text-lg font-semibold ${className}`} style={style}>
          {children}
        </div>
      );
    case "small":
      return (
        <small className={`text-sm font-medium leading-none ${className}`} style={style}>
          {children}
        </small>
      );
    case "muted":
      return (
        <p className={`text-sm text-muted-foreground ${className}`} style={style}>
          {children}
        </p>
      );
    default:
      return (
        <span style={style} className={className}>
          {children}
        </span>
      );
  }
};

export default Typography;
