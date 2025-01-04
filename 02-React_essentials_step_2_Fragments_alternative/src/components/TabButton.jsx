export default function TabButton({children, isSelected, ...props}){
    console.log('Rendering TabButton')
    return(
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}