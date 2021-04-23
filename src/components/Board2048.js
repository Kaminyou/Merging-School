import Row from './Row'

export default function Board2048 ({ board, handleReset, gameover, win, boardflag}) {

    let boardClassName = "board";
    let infoClassName = "info";
    if (gameover) {
        boardClassName += " game-over-board";
        infoClassName += " game-over-wrapper end-fade-in";
    }
    let outSentence = "No funding this year QAO";
    if (win){
        outSentence = "You should study a PhD!";
    }

    return (
        <>
        <table className={boardClassName} id="board-full">
            <tbody>
                {board.map((row_vector, row_idx) => (<Row key={row_idx} row_vector={row_vector} row_idx={row_idx} row_flag={boardflag[row_idx]}/>))}
            </tbody>
        </table>
        <div className={infoClassName} id="game-over-info">
            <span id="game-over-text">{outSentence}</span>
            <div className="button" id="game-over-button" onClick={handleReset}>Try again</div>
        </div>
        </>
    );
};