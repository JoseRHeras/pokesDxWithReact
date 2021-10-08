interface EventHandlers {
    previous: (e: React.MouseEvent) => void;
    next: (e: React.MouseEvent) => void;
}

const Pagination: React.FC<EventHandlers> = ({previous, next}) => {
    return (
        <div className="controller">
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Pagination