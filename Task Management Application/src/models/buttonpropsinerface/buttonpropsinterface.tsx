export interface ButtonPropsInterface{
    
    type:'submit' | 'reset' | 'button' | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
    size:string
    color:string
    bg:string
    hover:string
}