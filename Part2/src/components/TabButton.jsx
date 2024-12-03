export default function TabButton({children, onAnyEventWeWant}){
    console.log('Rendering TabButton');
    return(
        <li><button onClick={onAnyEventWeWant}>{children}</button></li>
    )
}