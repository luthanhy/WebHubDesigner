import stylebar from './sidebar.module.css'
const sidebar = ({styles}) => {
    const items = [
        {id:"1",path:"1"},
        {id:"2",path:"2"},
        {id:"3",path:"3"},
        {id:"4",path:"4"},
        {id:"5",path:"5"},
        {id:"6",path:"6"},
        {id:"7",path:"7"},
        {id:"8",path:"8"},
        {id:"9",path:"9"},
    ]
    return (
        <div className={styles.sidebar}>
         <ul className={stylebar.itemList}>
                {items.map(item => (
                    <li key={item.id} className={stylebar.item}>
                        {item.path}
                    </li>
                ))}
            </ul>
    </div>
    );
}

export default sidebar;