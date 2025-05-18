export default function TambahLembaga() {
    return (
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Alamat sekretariat</th>
                    <th>Kode cabang</th>
                    <th>Tanggal Lahir</th>
                    <th>Rois Dewan Penasihat</th>
                    <th>Ketua Dewan Harian</th>
                    <th>Sekrataris Umum</th>
                    <th>Bendahara</th>
                    <th>Provinsi</th>
                    <th>Kabupaten</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr>
            </tbody>
        </table>
    );
}
