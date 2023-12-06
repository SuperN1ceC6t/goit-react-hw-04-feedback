export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
            {options.map(option => (
                <button name={option} type="button" onClick={onLeaveFeedback} key={option}>{option}</button>
            ))}
        </>
    )
}