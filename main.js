function populateSquare(square, rows, columns)
{
	const colWidth = square.width() / columns;
	const rowHeight = square.height() / rows;

	for (let i = 0; i < rows; ++i)
	{
		const typeOfRow = (i % 2 == 0) ? 'row-even' : '';
		const row = $(`<div class='row ${typeOfRow}' style='height: ${rowHeight}px'></div>`);

		for (let j = 0; j < columns; ++j)
		{
			const typeOfColumn = (j % 2 == 0) ? 'col-even' : '';
			const column = $(`<div class='col ${typeOfColumn}' style='width: ${colWidth}px;'>
				<div class='spinny'></div>
			</div>`);
			row.append(column);
		}
		square.append(row);
	}
}

async function init(rows, columns)
{
	// Square 1
	const sq1 = $('#square1');
	populateSquare(sq1, rows, columns);

	// Square 2
	const sq2 = $('#square2');
	populateSquare(sq2, rows, columns);

	// Square 3
	const sq3 = $('#square3');
	populateSquare(sq3, rows, columns);

	const sq3Rows = $('#square3 .row');
	for (let i = 0; i < rows; ++i)
	{
		for (let j = 0; j < i; ++j)
		{
			const elem = $($(sq3Rows[i]).children()[j]);
			setTimeout(() =>
			{
				elem.css({'animation': 'square3 5s linear infinite'});
			}, i * j * 20);
		}

		for (let j = columns; j >= i; j--)
		{
			const elem = $($(sq3Rows[i]).children()[j]);
			setTimeout(() =>
			{
				elem.css({'animation': 'square3 5s linear infinite'});
			}, i * j * 20);
		}
	}



}

const rows = 15;
const cols = 15;

$(document).ready(() =>
{
	init(rows, cols);
});

$(window).resize(() =>
{
	$('.square').children().remove();
	init(rows, cols);
});
