export default function Grid ({ grid_value, row_idx, column_idx, grid_flag}) {
    
    let grid_id = `grid-${row_idx}-${column_idx}`;
    let value_id = `value-${row_idx}-${column_idx}`;
    let temp_class_name = 'grid';
    let value = (grid_value === 0) ? '' : grid_value;

    const mapping = {'':"", 2:"NCTU", 4:"NYMU", 8:"NTU", 16:"UCSD", 32:"UBC", 64:"CUHK", 128:"UCLA", 256:"NYU",512:"UCB",1024:"HKUST",
                    2048:"UTokyo", 4096:"Columbia", 8192:"Yale", 16384:"Cambridge", 32768:"Stanford", 65536:"MIT"}
    
    if (value) {
        temp_class_name += ` level-${value}`;
    }
    if (grid_flag) {
        temp_class_name += " school-fade-in"
    }

    return (
        <td>
            <div className={temp_class_name} id={grid_id}>
                <div className="school-name" id={value_id}>{mapping[value]}</div>
            </div>
        </td>
    );
}