const CODES = {
    A: 65,
    Z: 90
}

function toColumn(col, index) {
    return `
        <div class="column" data-type="resizable" data-col="${index}">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function toCell(_, col) {
    return `
        <div class="cell" contenteditable data-col="${col}"></div>
    `
}
function createRow(index, content) {
    const resize = index ?  '<div class="row-resize" data-resize="row"></div>' : ''
    return `
    <div class="row" data-type="resizable">
        <div class="row-info">
            ${index ? index : ''}
            ${resize}
        </div>
function toColumn(col) {
    return `
        <div class="column">${col}</div>
    `
}

function toCell() {
    return `
        <div class="cell" contenteditable></div>
    `
}
function createRow(index, content) {
    return `
    <div class="row">
        <div class="row-info">${index ? index : ''}</div>
        <div class="row-data">${content}</div>
    </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) { //сколько строчек будет по умолчанию
    const colsCount = CODES.Z - CODES.A + 1 // количество столбцов
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(null, cols))

    for(let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(i + 1, cells))
    }
    return rows.join('')
}