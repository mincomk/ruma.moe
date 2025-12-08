import closeruma from '../../assets/closeruma.png'
import { text, topBar } from './TopBar.css'

export function TopBar() {
    return (
        <header className={topBar}>
            <img src={closeruma} alt="ruma closed" />
            <div className={text}>ruma.moe</div>
        </header>
    )
}
