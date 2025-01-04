export default function Button({children, mode='filled', Icon, ...props}) {
    // Todo: Build this component!
    let cssClass = `button ${mode}-button`;
    if(Icon){
        cssClass = cssClass + props.className
    }
    return(
        <button className = {cssClass} {...props}>{children}
        {Icon && (
            <span className="button-icon">
                <Icon />
            </span>
        )}
        </button>
    );
    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
   }
   