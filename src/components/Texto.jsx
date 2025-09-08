export function H1({ children, className = "" }) {
    return (
      <h1 className={`font-[montserrat] font-bold text-[22px] leading-[30px] sm:text-[34px] sm:leading-[40px]  ${className}`}>
        {children}
      </h1>
    )
  }
  
  export function H2({ children, className = "" }) {
    return (
      <h2 className={`[font-open-sans] font-normal text-[10px] leading-[20px] sm:text-[20px] sm:leading-[30px]  ${className}`}>
        {children}
      </h2>
    )
  }

  
  export function H2_btn({ children, className = "" }) {
    return (
      <h2 className={`font-[roboto] font-bold text-[10px] leading-[17px] sm:text-[20px] sm:leading-[30px] ${className}`}>
        {children}
      </h2>
    )
  }
  
  export function H2_titulo({ children, className = "" }) {
    return (
      <h2 className={`font-[montserrat] font-semibold text-[22px] leading-[30px] sm:text-[34px] sm:leading-[40px] ${className}`}>
        {children}
      </h2>
    )
  }
  
  export function P({ children, className = "" }) {
    return (
      <p className={`font-[roboto] font-normal text-[8px] leading-[20px] sm:text-[14px] sm:leading-[30px]  ${className}`}>
        {children}
      </p>
    )
  }
  