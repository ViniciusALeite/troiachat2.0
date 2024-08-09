type Props = {
    answers: any;
}

export default function Answers({ answers }: Props) {
    return (
        <div>
            {answers.map((answer: any, index: number) => (
                <div key={index} className="flex flex-col space-y-2 max-w-3xl w-full">
                    <div className="px-4 bg-[var(--answers-background)] rounded-md w-full whitespace-pre-line">
                        {answer.answer}
                    </div>
                </div>
            ))}
        </div>
    )
};
