import Collapse from "./ui/collapse";

function Info() {
  return (
    <section className="flex flex-col md:flex-row lg:max-w-[1200px] md:mx-auto max-w-[100%] px-6">
      <div className="md:min-w-[440px] mb-5 md:mb-0">
        <h1 className="text-center text-xl mb-2 md:mb-0 md:text-left lg:text-2xl font-semibold leading-tight tracking-tighter lg:leading-[1.1]">
          Informasi Seputar MySaly
        </h1>
      </div>
      <div className="flex-col grow">
        <Collapse title="MySaly itu apa ya?" wrapperClassName="pb-3">
          <p>
            MySaly adalah temanmu dalam menghitung gaji bersih bulananmu. Cukup
            masukkan gaji kotormu dan status perkawinan, lalu MySaly akan
            menghitung gaji bersihmu secara otomatis. Praktis dan mudah!
          </p>
        </Collapse>

        <Collapse
          title="Kira-kira apa aja yang masuk dalam gaji ya?"
          wrapperClassName="pb-3 pt-3"
        >
          <ul className="list-disc list-inside ml-1">
            <li>Gaji Pokok</li>
            <li>Tunjangan Tetap</li>
            <li>Tunjangan Tidak Tetap</li>
            <li>Potongan</li>
            <li>Uang Lembur</li>
          </ul>
        </Collapse>

        <Collapse title="Gaji bersih itu apa ya?" wrapperClassName="pb-3 pt-3">
          <p>
            Gaji bersih atau yang sering disebut take home pay adalah uang yang
            kita terima setiap bulan setelah dikurangi beberapa potongan,
            seperti pajak PPh 21, biaya jabatan, iuran BPJS Kesehatan, dan iuran
            BPJS Ketenagakerjaan.
          </p>
        </Collapse>

        <Collapse
          title="Tarif PTKP yang terbaru berapa ya?"
          wrapperClassName="pb-3 pt-3"
        >
          <p className="mb-2">Tarif PTKP Pria/Wanita Tidak Kawin</p>
          <ul className="list-disc list-inside ml-1 mb-4 leading-7">
            <li className="mb-2">PTKP TK/0: Rp54.000.000,- per tahun.</li>
            <li className="mb-2">PTKP TK/1: Rp58.500.000,- per tahun.</li>
            <li className="mb-2">PTKP TK/2: Rp63.000.000,- per tahun.</li>
            <li className="mb-2">PTKP TK/3: Rp67.500.000,- per tahun.</li>
          </ul>

          <p className="mb-2">Tarif PTKP Pria/Wanita Kawin</p>
          <ul className="list-disc list-inside ml-1 mb-4 leading-7">
            <li>PTKP K/0: Rp58.500.000,- per tahun.</li>
            <li>PTKP K/1: Rp63.000.000,- per tahun.</li>
            <li>PTKP K/2: Rp67.500.000,- per tahun.</li>
            <li>PTKP K/3: Rp72.000.000,- per tahun.</li>
          </ul>

          <p className="mb-2">
            Tarif PTKP Penghasilan Suami dan Istri Digabung
          </p>
          <ul className="list-disc list-inside ml-1 leading-7">
            <li>PTKP K/I/0: Rp112.500.000,- per tahun.</li>
            <li>PTKP K/I/1: Rp117.000.000,- per tahun.</li>
            <li>PTKP K/I/2: Rp121.500.000,- per tahun.</li>
            <li>PTKP K/I/3: Rp126.000.000,- per tahun.</li>
          </ul>
        </Collapse>

        <Collapse title="Apa itu Biaya jabatan?" wrapperClassName="pb-3 pt-3">
          <p>
            Biaya jabatan adalah biaya yang diperlukan untuk mengurus, memungut,
            dan menjaga penghasilan kita sebagai karyawan tetap, tanpa memandang
            jabatan kita di perusahaan.
          </p>
          <br />
          <p>
            Dalam perhitungan penghasilan yang akan dikenakan pajak, ada aturan
            yang perlu diikuti, yaitu sesuai dengan{" "}
            <a
              className="text-blue-600 underline"
              href="https://jdih.kemenkeu.go.id/fulltext/2008/250~PMK.03~2008Per.HTM#:~:text=%3A-,PERATURAN%20MENTERI%20KEUANGAN%20TENTANG%20BESARNYA%20BIAYA%20JABATAN%20ATAU%20BIAYA%20PENSIUN,BRUTO%20PEGAWAI%20TETAP%20ATAU%20PENSIUNAN.&text=Agar%20setiap%20orang%20mengetahuinya%2C%20memerintahkan,dalam%20Berita%20Negara%20Republik%20Indonesia."
              target="_blank"
            >
              Peraturan Menteri Keuangan (PMK) Nomor 250/PMK.03/2008
            </a>
            , yang menetapkan besarnya sebesar 5%. Jadi, jumlah biaya jabatan
            yang bisa kita kurangkan dari penghasilan bruto kita setiap bulan
            adalah 5% dari total penghasilan atau maksimal Rp6.000.000 dalam
            setahun, yang setara dengan Rp500.000 per bulan. Santai saja, tidak
            perlu terlalu pusing!
          </p>
        </Collapse>

        <Collapse title="Berapa pajak PPh 21-nya?" wrapperClassName="pb-3 pt-3">
          <ul className="list-disc list-inside ml-1 mb-4 leading-7">
            <li>5%: Penghasilan tahunan sampai dengan Rp60.000.000,-</li>
            <li>
              15%: Penghasilan tahunan mulai Rp60.000.000,- sampai dengan
              Rp250.000.000,-
            </li>
            <li>
              25%: Penghasilan tahunan mulai dari Rp250.000.000,- sampai dengan
              Rp500.000.000,-
            </li>
            <li>
              30%: Penghasilan tahunan mulai dari Rp500.000.000,- sampai dengan
              Rp5.000.000.000,-
            </li>
            <li>35%: Penghasilan di atas Rp5.000.000.000,-</li>
          </ul>
          Bagi wajib pajak yang tidak memiliki NPWP, dikenakan tarif 20% lebih
          tinggi dari tarif normal.
        </Collapse>

        <Collapse
          title="BPJS Kesehatan berapa ya iurannya?"
          wrapperClassName="pb-3 pt-3"
        >
          <p>
            Jadi, untuk BPJS Kesehatan, setiap bulan kamu hanya perlu bayar 1%
            dari gaji kamu, sementara sisanya, yaitu 4%, akan ditanggung oleh
            perusahaan.
          </p>
        </Collapse>

        <Collapse
          title="BPJS Ketenaga Kerjaan berapa ya iurannya?"
          wrapperClassName="pb-3 pt-3"
        >
          <p>
            Iuran BPJS Ketenagakerjaan itu simpel, teman. Jadi, dari total gaji
            yang kamu dapetin, kamu cuma perlu bayar 2%, sementara perusahaan
            kamu tanggung 3,7%. Gampang, kan?
          </p>
        </Collapse>
      </div>
    </section>
  );
}

export default Info;
