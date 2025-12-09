import closeruma from '../../assets/closeruma.png';
import { text, topBar } from './TopBar.css';

export function TopBar({ onCheek }: { onCheek: () => void }) {
    return (
        <header className={topBar}>
            <img src={closeruma} alt="ruma closed" onClick={onCheek} />
            <div className={text}>ruma.moe</div>
        </header>
    );
}
