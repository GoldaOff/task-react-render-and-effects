import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const { sourceId } = props;

    const [lastMessage, setLastMessage] = useState<number>(-1);

    useEffect(() => {
        const handler = (message: number) => {
            setLastMessage(message);
        };

        subscribe(sourceId, handler);

        return () => {
            unsubscribe(sourceId, handler);
            setLastMessage(-1);
        };
    }, [sourceId]);

    return (
        <div>
            {sourceId}: {lastMessage}
        </div>
    );
}
