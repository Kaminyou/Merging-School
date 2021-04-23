import Grid from '../components/Grid'
export default function Row ({ row_vector, row_idx, row_flag}) {
    return (
        <tr>
          {row_vector.map((value, column_idx) => (<Grid key={column_idx} grid_value={value} row_idx={row_idx} column_idx={column_idx} grid_flag={row_flag[column_idx]}/>))}
        </tr>
    );
};