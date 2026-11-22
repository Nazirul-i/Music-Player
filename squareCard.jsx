import PropTypes from 'prop-types'

function SquareCard({name = "album name", num = 0}) {
    return(
        <div className="bg-cyan-200 w-fit p-4 flex flex-col items-end">
            <div className="border-2 w-60 text-4xl font-bold">
            {num}
            </div>
            <div>
                <img src="https://placehold.co/200" alt="cover art" />
                <div className="border-2 border-black">
                    <div> {name} </div>
                </div>
            </div>

        </div>
    )
};



SquareCard.PropTypes = {
    name : PropTypes.string,
    num : PropTypes.number
}

export default SquareCard