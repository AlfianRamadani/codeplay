export const materials = [
    {
        id: '1',
        materialName: '🪄 Dasar-Dasar Ajaib Coding',
        materialDescription: 'Pelajari kekuatan sihir di balik setiap baris kode!',
        icon: '',
        backgroundColor: '#81C784',
        chapters: [
            {
                id: '1',
                chapterName: '🚀 Ekspedisi Kode Pertamaku',
                chapterDescription: 'Mulai perjalananmu sebagai penyihir kode muda!',
                icon: 'compass-rose',
                stages: [
                    {
                        id: 's1_1_1',
                        stageName: 'Blok Perintah Dasar',
                        status: 'unlocked',
                        prerequisiteStageId: null,
                        icon: 'puzzle-outline',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Pengenalan Blok Perintah',
                        questions: [
                            {
                                questionId: 'q1_1_1_mc1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Identifikasi Blok Mulai',
                                questionText: 'Blok mana yang biasanya digunakan untuk memulai program?',
                                options: ['Blok Tunggu', 'Blok Mulai', 'Blok Selesai', 'Blok Suara'],
                                correctAnswer: 'Blok Mulai',
                                explanation: 'Blok "Mulai" (seringkali berwarna hijau dengan bendera) adalah titik awal eksekusi program blok.'
                            },
                            {
                                questionId: 'q1_1_1_fill1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Fungsi Blok Gerak',
                                questionText: "Untuk membuat karakter bergerak maju satu langkah, kita menggunakan blok ____.",
                                correctAnswer: 'maju',
                                placeholder: 'nama blok',
                                explanation: 'Blok "maju" memerintahkan karakter untuk bergerak ke depan.'
                            },
                            {
                                questionId: 'q1_1_1_mc2',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Fungsi Blok Umum',
                                questionText: 'Warna apa yang sering digunakan untuk blok "Mulai" pada program coding blok?',
                                options: ['Merah', 'Biru', 'Hijau', 'Kuning'],
                                correctAnswer: 'Hijau',
                                explanation: 'Blok "Mulai" seringkali berwarna hijau untuk menandakan titik awal.'
                            },
                            {
                                questionId: 'q1_1_1_guess1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Urutan Blok Sederhana',
                                questionText: 'Jika ada blok "MAJU", lalu blok "BICARA \'Halo!\'", apa yang terjadi lebih dulu?',
                                codeStimulus: "MAJU\nBICARA 'Halo!'",
                                correctAnswer: 'Karakter maju',
                                explanation: 'Blok dieksekusi berurutan dari atas ke bawah. Karakter akan maju dulu, baru bicara.'
                            },
                            {
                                questionId: 'q1_1_1_fill2',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Blok Akhir Program',
                                questionText: 'Beberapa sistem coding blok menggunakan blok ____ untuk menandakan akhir dari program utama.',
                                correctAnswer: 'selesai',
                                placeholder: 'nama blok',
                                explanation: 'Blok "Selesai" atau "Stop" sering digunakan untuk mengakhiri eksekusi program.'
                            }
                        ]
                    },
                    {
                        id: 's1_1_2',
                        stageName: 'Mengarahkan Sang Ksatria',
                        status: 'locked',
                        prerequisiteStageId: 's1_1_1',
                        icon: 'robot-outline',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Urutan Perintah Blok',
                        questions: [
                            {
                                questionId: 'q1_1_2_mc1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Logika Urutan',
                                questionText: 'Susunlah blok berikut agar Ksatria mengambil pedang: (1) Maju 2 langkah, (2) Belok Kanan, (3) Ambil Pedang.',
                                options: ['Ambil Pedang', 'Belok Kanan', 'Maju 2 langkah'],
                                correctAnswer: 'Maju 2 langkah',
                                explanation: 'Ksatria harus maju dulu, lalu belok, baru bisa mengambil pedang.'
                            },
                            {
                                questionId: 'q1_1_2_mc2',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Blok Belok',
                                questionText: 'Untuk membuat karakter berputar menghadap ke kiri, blok apa yang digunakan?',
                                options: ['Belok Atas', 'Belok Kanan', 'Belok Kiri', 'Belok Bawah'],
                                correctAnswer: 'Belok Kiri',
                                explanation: 'Blok "Belok Kiri" akan memutar karakter 90 derajat ke arah kiri.'
                            },
                            {
                                questionId: 'q1_1_2_fill1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Blok Aksi',
                                questionText: 'Blok yang digunakan ksatria untuk mengambil perisai adalah blok "____ Perisai".',
                                correctAnswer: 'Ambil',
                                placeholder: 'kata kerja',
                                explanation: 'Blok aksi seperti "Ambil" digunakan untuk interaksi dengan objek.'
                            },
                            {
                                questionId: 'q1_1_2_mc3',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Parameter Blok Maju',
                                questionText: 'Jika ingin karakter maju 3 langkah, apa yang diubah pada blok "Maju"?',
                                options: ['Warnanya', 'Ukurannya', 'Angka langkahnya', 'Bentuknya'],
                                correctAnswer: 'Angka langkahnya',
                                explanation: 'Blok "Maju" biasanya memiliki parameter untuk jumlah langkah.'
                            },
                            {
                                questionId: 'q1_1_2_guess1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Eksekusi Urutan',
                                questionText: 'Jika urutan blok: BELOK KANAN, MAJU 1, BICARA "Hi!". Apa yang pertama dilakukan karakter?',
                                codeStimulus: "BELOK KANAN\nMAJU 1\nBICARA 'Hi!'",
                                correctAnswer: 'Belok Kanan',
                                explanation: 'Perintah dieksekusi satu per satu dari atas ke bawah.'
                            }
                        ]
                    },
                    {
                        id: 's1_1_3',
                        stageName: 'Suara dan Aksi',
                        status: 'locked',
                        prerequisiteStageId: 's1_1_2',
                        icon: 'volume-high',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Blok Interaksi dan Event Sederhana',
                        questions: [
                            {
                                questionId: 'q1_1_3_mc1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Blok Suara',
                                questionText: 'Blok apa yang digunakan untuk membuat karakter mengeluarkan suara "Meow"?',
                                options: ['Blok Bicara "Meow"', 'Blok Musik "Meow"', 'Blok Suara "Meow"', 'Blok Efek "Meow"'],
                                correctAnswer: 'Blok Suara "Meow"',
                                explanation: 'Blok suara digunakan untuk memainkan efek suara tertentu.'
                            },
                            {
                                questionId: 'q1_1_3_fill1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Blok Event Klik',
                                questionText: 'Untuk menjalankan perintah ketika karakter di-klik, kita menggunakan blok event "Ketika Karakter ____".',
                                correctAnswer: 'diklik',
                                placeholder: 'aksi',
                                explanation: 'Blok event seperti "Ketika Karakter Diklik" memulai serangkaian aksi sebagai respons terhadap suatu kejadian.'
                            },
                            {
                                questionId: 'q1_1_3_mc2',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Blok Tunggu',
                                questionText: 'Fungsi blok "Tunggu 1 detik" adalah untuk...',
                                options: ['Mempercepat program', 'Memberi jeda sementara', 'Menghentikan program selamanya', 'Memainkan musik'],
                                correctAnswer: 'Memberi jeda sementara',
                                explanation: 'Blok "Tunggu" memberikan jeda atau delay dalam eksekusi program.'
                            },
                            {
                                questionId: 'q1_1_3_guess1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Event dan Aksi',
                                questionText: 'Jika ada event "Ketika Tombol Spasi Ditekan" yang terhubung ke blok "LOMPAT", apa yang terjadi saat spasi ditekan?',
                                correctAnswer: 'Karakter melompat',
                                explanation: 'Event akan memicu aksi yang terhubung dengannya.'
                            },
                            {
                                questionId: 'q1_1_3_mc3',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Blok Bicara',
                                questionText: 'Untuk menampilkan teks "Halo Dunia!" pada gelembung bicara karakter, blok apa yang paling tepat?',
                                options: ['Blok Cetak "Halo Dunia!"', 'Blok Tulis "Halo Dunia!"', 'Blok Suara "Halo Dunia!"', 'Blok Bicara "Halo Dunia!"'],
                                correctAnswer: 'Blok Bicara "Halo Dunia!"',
                                explanation: 'Blok "Bicara" biasanya digunakan untuk menampilkan teks dalam gelembung percakapan.'
                            }
                        ]
                    },
                    { // UJIAN CHAPTER 1
                        id: 's1_1_4',
                        stageName: 'Ujian Ksatria Pemberani',
                        status: 'locked',
                        prerequisiteStageId: 's1_1_3',
                        icon: 'flag-checkered',
                        totalSoal: 5,
                        isCheckpoint: true,
                        konsep_kunci_coding_stage: 'Review Konsep Dasar',
                        questions: [
                            {
                                questionId: 'q_uji1_1_mc',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Urutan Blok',
                                questionText: 'Manakah urutan yang benar agar robot mengambil bola lalu kembali ke titik awal jika ia menghadap bola yang jaraknya 2 langkah?',
                                options: ['MAJU 2, AMBIL, MUNDUR 2', 'AMBIL, MAJU 2, MUNDUR 2', 'MUNDUR 2, AMBIL, MAJU 2', 'MAJU 2, MUNDUR 2, AMBIL'],
                                correctAnswer: 'MAJU 2, AMBIL, MUNDUR 2',
                                explanation: 'Robot harus maju untuk mencapai bola, mengambilnya, lalu mundur kembali.'
                            },
                            {
                                questionId: 'q_uji1_2_fill',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Blok Event',
                                questionText: 'Event "Ketika Bendera Hijau Diklik" biasanya menandakan ____ program.',
                                correctAnswer: 'dimulainya', // atau 'awal'
                                placeholder: 'kata',
                                explanation: 'Bendera hijau adalah simbol universal untuk memulai eksekusi di banyak platform coding blok.'
                            },
                            {
                                questionId: 'q_uji1_3_guess',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Parameter Blok',
                                codeStimulus: "BICARA \"Halo\"\nTUNGGU 2 detik\nBICARA \"Dunia\"",
                                questionText: 'Berapa lama jeda antara kata "Halo" dan "Dunia" muncul?',
                                correctAnswer: '2 detik',
                                explanation: 'Blok "Tunggu 2 detik" memberikan jeda selama 2 detik.'
                            },
                            {
                                questionId: 'q_uji1_4_mc',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Identifikasi Blok Aksi',
                                questionText: 'Blok yang berfungsi mengubah penampilan karakter disebut blok...?',
                                options: ['Gerak', 'Suara', 'Tampilan', 'Kontrol'],
                                correctAnswer: 'Tampilan',
                                explanation: 'Blok dalam kategori "Tampilan" biasanya mengatur kostum, ukuran, atau efek visual karakter.'
                            },
                            {
                                questionId: 'q_uji1_5_seq',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Logika Urutan Menggambar',
                                questionText: 'Susun blok agar karakter menggambar satu garis lurus ke kanan lalu satu garis lurus ke atas: (1) MAJU 50 (2) BELOK KIRI 90 DERAJAT (3) MAJU 50',
                                options: ['MAJU 50', 'BELOK KIRI 90 DERAJAT', 'MAJU 50'], // Options bisa sama jika urutannya yang penting
                                correctSequence: ['MAJU 50', 'BELOK KIRI 90 DERAJAT', 'MAJU 50'],
                                explanation: 'Karakter maju, lalu berputar 90 derajat ke kiri untuk menghadap ke atas, lalu maju lagi.'
                            }
                        ]
                    }
                ]
            },
            {
                id: '2',
                chapterName: '🔁 Sihir Perulangan (Loop)',
                chapterDescription: 'Kuasai mantra untuk melakukan banyak hal dengan sedikit usaha!',
                icon: 'repeat-variant',
                stages: [
                    {
                        id: 's1_2_1',
                        stageName: 'Mantra "Ulangi!"',
                        status: 'locked',
                        prerequisiteStageId: 's1_1_4',
                        icon: 'numeric-3-box-multiple-outline',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Pengenalan Loop Terhitung',
                        questions: [
                            {
                                questionId: 'q1_2_1_guess1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Eksekusi Loop',
                                questionText: 'Jika ada blok "ULANGI 3 KALI" yang di dalamnya ada blok "MAJU 1 LANGKAH", berapa total langkah karakter maju?',
                                codeStimulus: "ULANGI 3 KALI:\n  MAJU 1 LANGKAH",
                                correctAnswer: "3",
                                explanation: 'Blok "MAJU 1 LANGKAH" akan dieksekusi sebanyak 3 kali.'
                            },
                            {
                                questionId: 'q1_2_1_mc1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Fungsi Loop',
                                questionText: 'Apa fungsi utama dari blok perulangan (loop)?',
                                options: ['Menghentikan program', 'Memilih salah satu perintah', 'Mengulang serangkaian perintah', 'Menyimpan data'],
                                correctAnswer: 'Mengulang serangkaian perintah',
                                explanation: 'Loop digunakan untuk menjalankan satu atau lebih perintah secara berulang.'
                            },
                            {
                                questionId: 'q1_2_1_fill1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Jenis Loop',
                                questionText: 'Blok "Ulangi 10 kali" adalah contoh dari loop ____.',
                                correctAnswer: 'terhitung',
                                placeholder: 'jenis loop',
                                explanation: 'Loop terhitung (counted loop) mengulang perintah sebanyak jumlah yang sudah ditentukan.'
                            },
                            {
                                questionId: 'q1_2_1_mc2',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Struktur Blok Loop',
                                questionText: 'Perintah yang ingin diulang diletakkan di ____ blok "Ulangi".',
                                options: ['Sebelum', 'Sesudah', 'Di dalam', 'Di luar'],
                                correctAnswer: 'Di dalam',
                                explanation: 'Blok perintah yang akan diulang ditempatkan di dalam "mulut" atau badan blok loop.'
                            },
                            {
                                questionId: 'q1_2_1_guess2',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Loop dan Suara',
                                questionText: 'Jika "ULANGI 2 KALI: (BICARA "Hop!")", berapa kali kata "Hop!" muncul?',
                                codeStimulus: "ULANGI 2 KALI:\n  BICARA \"Hop!\"",
                                correctAnswer: "2",
                                explanation: 'Blok BICARA "Hop!" akan dijalankan dua kali.'
                            }
                        ]
                    },
                    {
                        id: 's1_2_2',
                        stageName: 'Kreasi Pola Berulang',
                        status: 'locked',
                        prerequisiteStageId: 's1_2_1',
                        icon: 'hexagon-multiple-outline',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Loop untuk Menggambar Pola',
                        questions: [
                            { questionId: 'q1_2_2_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Pola Persegi', questionText: 'Untuk menggambar persegi dengan loop, berapa kali perintah "maju" dan "belok 90 derajat" diulang?', options: ['2 kali', '3 kali', '4 kali', '5 kali'], correctAnswer: '4 kali', explanation: 'Persegi memiliki 4 sisi yang sama dan 4 sudut 90 derajat.' },
                            { questionId: 'q1_2_2_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Sudut Belok Pola Segitiga', questionText: 'Untuk menggambar segitiga sama sisi menggunakan loop, setiap kali karakter belok, ia harus berputar sebesar ____ derajat.', correctAnswer: '120', placeholder: 'angka', explanation: 'Total putaran luar adalah 360 derajat. Untuk segitiga (3 sisi), 360/3 = 120 derajat.' },
                            {
                                questionId: 'q1_2_2_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Hasil Loop Menggambar Sebagian', questionText: 'Jika kode "ULANGI 2 KALI: (MAJU 50, BELOK KANAN 90)" dijalankan, bentuk apa yang mulai terbentuk?', codeStimulus: "ULANGI 2 KALI:\n  MAJU 50\n  BELOK KANAN 90", correctAnswer: 'Sudut siku-siku', // Atau "Bentuk L"
                                explanation: 'Karakter akan membuat dua sisi dari sebuah persegi, membentuk sudut siku-siku atau huruf L.'
                            },
                            { questionId: 'q1_2_2_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Loop dan Panjang Sisi', questionText: 'Dalam loop untuk menggambar pola, blok "MAJU [angka]" menentukan apa?', options: ['Jumlah pengulangan', 'Besar sudut belok', 'Panjang setiap sisi pola', 'Warna garis'], correctAnswer: 'Panjang setiap sisi pola', explanation: 'Angka pada blok "MAJU" menentukan seberapa jauh karakter bergerak, yang menjadi panjang sisi.' },
                            { questionId: 'q1_2_2_seq1', questionType: 'sequence', konsep_kunci_coding: 'Urutan Menggambar Garis Zigzag', questionText: 'Susun blok untuk membuat 1 segmen garis zigzag naik-turun (kanan atas, lalu kanan bawah): (1) BELOK KANAN 45, (2) MAJU 30, (3) BELOK KIRI 90, (4) MAJU 30', options: ['BELOK KANAN 45', 'MAJU 30', 'BELOK KIRI 90', 'MAJU 30'], correctSequence: ['BELOK KANAN 45', 'MAJU 30', 'BELOK KIRI 90', 'MAJU 30'], explanation: 'Urutan ini akan membuat karakter bergerak diagonal ke kanan atas, lalu diagonal ke kanan bawah.' }
                        ]
                    },
                    {
                        id: 's1_2_3',
                        stageName: 'Loop Tak Terbatas?',
                        status: 'locked',
                        prerequisiteStageId: 's1_2_2',
                        icon: 'infinity',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Konsep Infinite Loop dan Kondisi Berhenti',
                        questions: [
                            { questionId: 'q1_2_3_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Loop Selamanya', questionText: 'Blok "Ulangi Selamanya" akan berhenti jika...', options: ['Waktunya habis', 'Ada perintah "Stop" di dalamnya atau kondisi terpenuhi', 'Program error', 'Tidak akan pernah berhenti sendiri tanpa syarat'], correctAnswer: 'Ada perintah "Stop" di dalamnya atau kondisi terpenuhi', explanation: 'Loop selamanya membutuhkan kondisi berhenti eksplisit atau perintah stop agar tidak berjalan terus menerus.' },
                            { questionId: 'q1_2_3_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Risiko Infinite Loop', questionText: 'Loop yang tidak pernah berhenti disebut juga ____ loop.', correctAnswer: 'infinite', placeholder: 'istilah', explanation: 'Infinite loop bisa membuat program macet atau tidak responsif.' },
                            { questionId: 'q1_2_3_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Kapan Menggunakan Loop Selamanya', questionText: 'Kapan blok "Ulangi Selamanya" cocok digunakan?', options: ['Untuk tugas yang hanya dilakukan sekali', 'Untuk animasi yang berjalan terus atau game', 'Untuk menghitung sampai 10', 'Untuk menggambar satu persegi'], correctAnswer: 'Untuk animasi yang berjalan terus atau game', explanation: 'Loop selamanya berguna untuk proses latar belakang atau animasi yang berkelanjutan dalam game atau aplikasi interaktif.' },
                            { questionId: 'q1_2_3_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Loop Selamanya dan Kondisi', questionText: 'Jika "ULANGI SELAMANYA: JIKA SENTUH TEPI MAKA BERHENTI", kapan loop berhenti?', correctAnswer: 'Saat karakter menyentuh tepi', explanation: 'Kondisi "JIKA SENTUH TEPI" akan menghentikan loop selamanya.' },
                            { questionId: 'q1_2_3_mc3', questionType: 'multiple-choice', konsep_kunci_coding: 'Menghentikan Loop', questionText: 'Selain kondisi di dalam loop, perintah apa yang bisa menghentikan semua skrip/loop?', options: ['Mulai Semua', 'Stop Semua', 'Tunggu Semua', 'Bicara Semua'], correctAnswer: 'Stop Semua', explanation: 'Perintah "Stop Semua" biasanya menghentikan semua aktivitas skrip yang berjalan.' }
                        ]
                    },
                    { // UJIAN CHAPTER 2
                        id: 's1_2_4',
                        stageName: 'Ujian Ahli Mantra Loop',
                        status: 'locked',
                        prerequisiteStageId: 's1_2_3',
                        icon: 'flag-checkered',
                        totalSoal: 5,
                        isCheckpoint: true,
                        konsep_kunci_coding_stage: 'Review Konsep Loop',
                        questions: [
                            { questionId: 'q_uji2_1_mc', questionType: 'multiple-choice', konsep_kunci_coding: 'Aplikasi Loop', questionText: 'Manakah aktivitas berikut yang paling cocok menggunakan loop?', options: ['Menulis nama sekali', 'Membuat karakter melompat 5 kali', 'Memilih warna karakter', 'Mengakhiri program'], correctAnswer: 'Membuat karakter melompat 5 kali', explanation: 'Loop cocok untuk tugas yang berulang dengan pola tertentu.' },
                            { questionId: 'q_uji2_2_fill', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Loop Bersarang (Dasar)', questionText: 'Jika ada loop di dalam loop lain, itu disebut loop ____.', correctAnswer: 'bersarang', placeholder: 'istilah', explanation: 'Loop bersarang (nested loop) adalah loop yang berada di dalam badan loop lainnya.' },
                            { questionId: 'q_uji2_3_guess', questionType: 'guess-output', konsep_kunci_coding: 'Output Loop Bersarang Sederhana', codeStimulus: "ULANGI 2 KALI (LUAR):\n  ULANGI 2 KALI (DALAM):\n    BICARA \"*\";", questionText: 'Berapa banyak bintang (*) yang akan ditampilkan?', correctAnswer: '4', explanation: 'Loop dalam berjalan 2 kali untuk setiap iterasi loop luar. Jadi 2 * 2 = 4.' },
                            { questionId: 'q_uji2_4_mc', questionType: 'multiple-choice', konsep_kunci_coding: 'Efisiensi Loop', questionText: 'Menggunakan loop untuk menggambar 100 lingkaran lebih efisien daripada...', options: ['Menggunakan satu blok lingkaran', 'Menyusun 100 blok lingkaran satu per satu', 'Tidak menggambar lingkaran sama sekali', 'Menggunakan kondisi'], correctAnswer: 'Menyusun 100 blok lingkaran satu per satu', explanation: 'Loop mengurangi redundansi kode dan membuat program lebih ringkas.' },
                            { questionId: 'q_uji2_5_seq', questionType: 'sequence', konsep_kunci_coding: 'Loop untuk Animasi Sederhana', questionText: 'Susun blok untuk membuat karakter berkedip (ganti kostum A lalu B) sebanyak 3 kali: (1) ULANGI 3 KALI, (2) GANTI KOSTUM KE A, (3) TUNGGU 0.5 DETIK, (4) GANTI KOSTUM KE B, (5) TUNGGU 0.5 DETIK. (Blok ULANGI membungkus yang lain)', options: ['ULANGI 3 KALI', 'GANTI KOSTUM KE A', 'TUNGGU 0.5 DETIK', 'GANTI KOSTUM KE B', 'TUNGGU 0.5 DETIK'], correctSequence: ['ULANGI 3 KALI', 'GANTI KOSTUM KE A', 'TUNGGU 0.5 DETIK', 'GANTI KOSTUM KE B', 'TUNGGU 0.5 DETIK'], explanation: 'Loop akan mengulang pergantian kostum dan jeda untuk efek berkedip.' }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'm1',
        materialName: '🧙‍♂️ Sihir Pemrograman Dasar',
        materialDescription: 'Pelajari mantra dasar untuk menguasai dunia koding!',
        icon: 'wizard-hat',
        backgroundColor: '#81C784',
        chapters: [
            {
                id: 'c1_m1',
                chapterName: '📜 Mantra Awal Pemrograman',
                chapterDescription: 'Mulai perjalananmu sebagai penyihir kode pemula',
                icon: 'book-open-variant',
                stages: [
                    {
                        id: 's1_c1_m1',
                        stageName: 'Pengenalan Blok Sihir',
                        status: 'unlocked',
                        prerequisiteStageId: null,
                        icon: 'cube-outline',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Struktur Program Dasar',
                        questions: [
                            {
                                questionId: 'q1_s1_c1_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Blok Mulai Program',
                                questionText: 'Blok apa yang harus menjadi awal setiap mantra pemrograman?',
                                options: ['Blok Gerak', 'Blok Suara', 'Blok Mulai', 'Blok Perulangan'],
                                correctAnswer: 'Blok Mulai',
                                explanation: 'Blok Mulai adalah titik awal eksekusi program'
                            },
                            {
                                questionId: 'q2_s1_c1_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Blok Gerak Dasar',
                                questionText: 'Untuk membuat karakter menghilang, gunakan blok ____',
                                correctAnswer: 'sembunyi',
                                placeholder: 'nama blok',
                                explanation: 'Blok "sembunyi" membuat karakter tidak terlihat'
                            },
                            {
                                questionId: 'q3_s1_c1_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Urutan Eksekusi',
                                questionText: 'Apa urutan aksi: BICARA "Abra" → TUNGGU 1 → BICARA "Kadabra"?',
                                codeStimulus: "BICARA \"Abra\"\nTUNGGU 1\nBICARA \"Kadabra\"",
                                correctAnswer: 'Muncul "Abra", jeda 1 detik, muncul "Kadabra"',
                                explanation: 'Program dieksekusi berurutan dengan jeda'
                            },
                            {
                                questionId: 'q4_s1_c1_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Menyusun Mantra Sederhana',
                                questionText: 'Susun mantra: Ketika bendera diklik, muncul, lalu bicara "Halo Magis!"',
                                options: ['Ketika Bendera Diklik', 'Muncul', 'BICARA "Halo Magis!"'],
                                correctSequence: ['Ketika Bendera Diklik', 'Muncul', 'BICARA "Halo Magis!"'],
                                explanation: 'Mulai dengan event, lalu aksi berurutan'
                            },
                            {
                                questionId: 'q5_s1_c1_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Blok Event',
                                questionText: 'Apa yang terjadi jika menggunakan blok "Ketika Layar Disentuh"?',
                                options: [
                                    'Program mulai otomatis',
                                    'Aksi dijalankan saat layar disentuh',
                                    'Karakter berubah warna',
                                    'Suara dimainkan'
                                ],
                                correctAnswer: 'Aksi dijalankan saat layar disentuh',
                                explanation: 'Event trigger aksi saat interaksi terjadi'
                            }
                        ]
                    },
                    {
                        id: 's2_c1_m1',
                        stageName: 'Kontrol Arah Sihir',
                        status: 'locked',
                        prerequisiteStageId: 's1_c1_m1',
                        icon: 'compass-rose',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Koordinat dan Gerak',
                        questions: [
                            {
                                questionId: 'q1_s2_c1_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Sistem Koordinat',
                                questionText: 'Di mana posisi (0,0) pada layar?',
                                options: [
                                    'Pojok kiri atas',
                                    'Pojok kanan bawah',
                                    'Tengah layar',
                                    'Pojok kiri bawah'
                                ],
                                correctAnswer: 'Tengah layar',
                                explanation: 'Titik (0,0) biasanya di tengah layar'
                            },
                            {
                                questionId: 'q2_s2_c1_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Blok Gerak',
                                questionText: 'Untuk pindah ke posisi acak, gunakan blok ____ ke posisi acak',
                                correctAnswer: 'pergi',
                                placeholder: 'kata kerja',
                                explanation: 'Blok "pergi ke posisi acak" memindahkan karakter'
                            },
                            {
                                questionId: 'q3_s2_c1_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Arah Karakter',
                                questionText: 'Karakter di (0,0) menghadap 90°. Jalankan: MAJU 100 → BELOK KIRI 90° → MAJU 100. Di posisi mana akhirnya?',
                                codeStimulus: "MAJU 100\nBELOK KIRI 90\nMAJU 100",
                                correctAnswer: '(100, -100)',
                                explanation: 'Gerak pertama ke kanan, lalu ke atas'
                            },
                            {
                                questionId: 'q4_s2_c1_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Membuat Pola Gerak',
                                questionText: 'Susun blok untuk segitiga: Maju 100, Belok 120°, ulangi 3x',
                                options: ['ULANGI 3 KALI', 'MAJU 100', 'BELOK 120'],
                                correctSequence: ['ULANGI 3 KALI', 'MAJU 100', 'BELOK 120'],
                                explanation: 'Loop membuat pola segitiga'
                            },
                            {
                                questionId: 'q5_s2_c1_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Nilai Derajat',
                                questionText: 'Berapa derajat untuk belok penuh (360°)?',
                                options: ['90', '180', '270', '360'],
                                correctAnswer: '360',
                                explanation: 'Satu putaran penuh = 360 derajat'
                            }
                        ]
                    },
                    {
                        id: 's3_c1_m1',
                        stageName: 'Interaksi Magis',
                        status: 'locked',
                        prerequisiteStageId: 's2_c1_m1',
                        icon: 'wand',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Event dan Respons',
                        questions: [
                            {
                                questionId: 'q1_s3_c1_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Event Keyboard',
                                questionText: 'Blok mana untuk merespons tombol spasi?',
                                options: [
                                    'Ketika tombol [panah] ditekan',
                                    'Ketika tombol [spasi] ditekan',
                                    'Ketika tombol [enter] ditekan',
                                    'Ketika tombol [shift] ditekan'
                                ],
                                correctAnswer: 'Ketika tombol [spasi] ditekan',
                                explanation: 'Event spesifik untuk tombol spasi'
                            },
                            {
                                questionId: 'q2_s3_c1_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Blok Suara',
                                questionText: 'Untuk memainkan suara "magic", gunakan blok ____ suara "magic"',
                                correctAnswer: 'mainkan',
                                placeholder: 'kata kerja',
                                explanation: 'Blok "mainkan suara" memutar efek suara'
                            },
                            {
                                questionId: 'q3_s3_c1_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Event Ganda',
                                questionText: 'Apa output: Event bendera → BICARA "A", Event spasi → BICARA "B". Klik bendera lalu spasi?',
                                correctAnswer: 'Muncul "A" lalu "B"',
                                explanation: 'Setiap event memicu aksi terpisah'
                            },
                            {
                                questionId: 'q4_s3_c1_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Blok Tampilan',
                                questionText: 'Apa fungsi blok "ganti kostum"?',
                                options: [
                                    'Mengubah ukuran',
                                    'Mengubah penampilan',
                                    'Mengubah posisi',
                                    'Mengubah suara'
                                ],
                                correctAnswer: 'Mengubah penampilan',
                                explanation: 'Kostum adalah tampilan visual berbeda'
                            },
                            {
                                questionId: 'q5_s3_c1_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Membuat Efek Sihir',
                                questionText: 'Susun: Ketika diklik, ubah ukuran 200%, mainkan suara "magic", tunggu 1 detik, kembalikan ukuran',
                                options: [
                                    'Ketika karakter diklik',
                                    'Atur ukuran ke 200%',
                                    'Mainkan suara "magic"',
                                    'Tunggu 1 detik',
                                    'Atur ukuran ke 100%'
                                ],
                                correctSequence: [
                                    'Ketika karakter diklik',
                                    'Atur ukuran ke 200%',
                                    'Mainkan suara "magic"',
                                    'Tunggu 1 detik',
                                    'Atur ukuran ke 100%'
                                ],
                                explanation: 'Urutan membuat efek visual dengan suara'
                            }
                        ]
                    },
                    {
                        id: 's4_c1_m1',
                        stageName: 'Ujian Penyihir Junior',
                        status: 'locked',
                        prerequisiteStageId: 's3_c1_m1',
                        icon: 'medal',
                        totalSoal: 5,
                        isCheckpoint: true,
                        konsep_kunci_coding_stage: 'Review Dasar',
                        questions: [
                            {
                                questionId: 'q1_s4_c1_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Konsep Event',
                                questionText: 'Manakah yang BUKAN blok event?',
                                options: [
                                    'Ketika Bendera Diklik',
                                    'Ketika Suara > 10',
                                    'MAJU 10',
                                    'Ketika Pesan Diterima'
                                ],
                                correctAnswer: 'MAJU 10',
                                explanation: 'MAJU 10 adalah blok aksi'
                            },
                            {
                                questionId: 'q2_s4_c1_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Koordinat',
                                questionText: 'Posisi (150, -100) berarti ____ unit ke kanan dan ____ unit ke bawah dari tengah',
                                correctAnswer: '150,100',
                                placeholder: 'x,y',
                                explanation: 'X positif = kanan, Y negatif = bawah'
                            },
                            {
                                questionId: 'q3_s4_c1_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Urutan Aksi',
                                questionText: 'Apa output: SEMBUNYI → BICARA "Lihat aku?" → MUNCUL',
                                codeStimulus: "SEMBUNYI\nBICARA \"Lihat aku?\"\nMUNCUL",
                                correctAnswer: 'Karakter sembunyi, bicara (tak terlihat), lalu muncul',
                                explanation: 'Bicara saat tersembunyi tetap terjadi'
                            },
                            {
                                questionId: 'q4_s4_c1_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Program Lengkap',
                                questionText: 'Susun: Ketika bendera, pergi ke (0,0), hadap 90°, maju 50, putar 360° selama 2 detik',
                                options: [
                                    'Ketika Bendera Diklik',
                                    'Pergi ke x:0 y:0',
                                    'Setel arah ke 90°',
                                    'MAJU 50',
                                    'Putar 360° selama 2 detik'
                                ],
                                correctSequence: [
                                    'Ketika Bendera Diklik',
                                    'Pergi ke x:0 y:0',
                                    'Setel arah ke 90°',
                                    'MAJU 50',
                                    'Putar 360° selama 2 detik'
                                ],
                                explanation: 'Urutan logis: mulai, posisi, arah, gerak, animasi'
                            },
                            {
                                questionId: 'q5_s4_c1_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Blok Dasar',
                                questionText: 'Apa fungsi blok "Tunggu"?',
                                options: [
                                    'Mempercepat program',
                                    'Memberi jeda waktu',
                                    'Menghentikan permanen',
                                    'Mengulang perintah'
                                ],
                                correctAnswer: 'Memberi jeda waktu',
                                explanation: 'Blok Tunggu membuat jeda sementara'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'c2_m1',
                chapterName: '🌀 Seni Perulangan Magis',
                chapterDescription: 'Kuasi mantra pengulangan untuk efisiensi',
                icon: 'infinity',
                stages: [
                    {
                        id: 's1_c2_m1',
                        stageName: 'Dasar Loop Sihir',
                        status: 'locked',
                        prerequisiteStageId: 's4_c1_m1',
                        icon: 'repeat',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Loop Dasar',
                        questions: [
                            {
                                questionId: 'q1_s1_c2_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Blok Ulangi',
                                questionText: 'Apa fungsi blok "Ulangi 10 kali"?',
                                options: [
                                    'Jalankan perintah sekali',
                                    'Jalankan perintah 10 kali',
                                    'Hentikan program 10 detik',
                                    'Ubah arah karakter'
                                ],
                                correctAnswer: 'Jalankan perintah 10 kali',
                                explanation: 'Perintah dalam loop diulang sesuai jumlah'
                            },
                            {
                                questionId: 'q2_s1_c2_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Loop Terhitung',
                                questionText: 'Loop yang jumlah pengulangannya tetap disebut loop ____',
                                correctAnswer: 'terhitung',
                                placeholder: 'jenis loop',
                                explanation: 'Counted loop memiliki iterasi tetap'
                            },
                            {
                                questionId: 'q3_s1_c2_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Eksekusi Loop',
                                questionText: 'Berapa kali "Magis!" muncul jika: Ulangi 5 kali → BICARA "Magis!"',
                                codeStimulus: "ULANGI 5 KALI\n  BICARA \"Magis!\"",
                                correctAnswer: '5 kali',
                                explanation: 'Perintah di dalam loop diulang 5 kali'
                            },
                            {
                                questionId: 'q4_s1_c2_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Loop Pola',
                                questionText: 'Susun: Ulangi 4 kali (maju 50, belok 90°)',
                                options: ['ULANGI 4 KALI', 'MAJU 50', 'BELOK 90'],
                                correctSequence: ['ULANGI 4 KALI', 'MAJU 50', 'BELOK 90'],
                                explanation: 'Loop membuat pola persegi'
                            },
                            {
                                questionId: 'q5_s1_c2_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Infinite Loop',
                                questionText: 'Apa ciri loop tak terbatas?',
                                options: [
                                    'Berhenti setelah 10 kali',
                                    'Tidak pernah berhenti',
                                    'Hanya berjalan sekali',
                                    'Memerlukan parameter'
                                ],
                                correctAnswer: 'Tidak pernah berhenti',
                                explanation: 'Infinite loop berjalan terus tanpa henti'
                            }
                        ]
                    },
                    {
                        id: 's2_c2_m1',
                        stageName: 'Loop Bertingkat',
                        status: 'locked',
                        prerequisiteStageId: 's1_c2_m1',
                        icon: 'layers',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Nested Loop',
                        questions: [
                            {
                                questionId: 'q1_s2_c2_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Loop Bersarang',
                                questionText: 'Apa itu nested loop?',
                                options: [
                                    'Loop dalam loop',
                                    'Loop paralel',
                                    'Loop acak',
                                    'Loop terbalik'
                                ],
                                correctAnswer: 'Loop dalam loop',
                                explanation: 'Nested loop = loop di dalam loop'
                            },
                            {
                                questionId: 'q2_s2_c2_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Jumlah Iterasi',
                                questionText: 'Jika loop luar 3x dan loop dalam 4x, total iterasi ____ kali',
                                correctAnswer: '12',
                                placeholder: 'angka',
                                explanation: '3 x 4 = 12 iterasi'
                            },
                            {
                                questionId: 'q3_s2_c2_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Nested Loop Output',
                                questionText: 'Berapa bintang (*) ditampilkan: Ulangi 2x (Ulangi 3x BICARA "*")',
                                codeStimulus: "ULANGI 2 KALI\n  ULANGI 3 KALI\n    BICARA \"*\"",
                                correctAnswer: '6',
                                explanation: '2 x 3 = 6 bintang'
                            },
                            {
                                questionId: 'q4_s2_c2_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Membuat Grid',
                                questionText: 'Susun untuk grid 3x3: Ulangi 3x (Ulangi 3x (MAJU 50), BALIK)',
                                options: [
                                    'ULANGI 3 KALI',
                                    'ULANGI 3 KALI',
                                    'MAJU 50',
                                    'BALIK 180°'
                                ],
                                correctSequence: [
                                    'ULANGI 3 KALI',
                                    'ULANGI 3 KALI',
                                    'MAJU 50',
                                    'BALIK 180°'
                                ],
                                explanation: 'Membuat pola baris dan kolom'
                            },
                            {
                                questionId: 'q5_s2_c2_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Efisiensi Loop',
                                questionText: 'Mengapa loop bersarang efisien?',
                                options: [
                                    'Membuat program lebih lambat',
                                    'Mengurangi jumlah baris kode',
                                    'Memperbesar ukuran program',
                                    'Membuat kode lebih rumit'
                                ],
                                correctAnswer: 'Mengurangi jumlah baris kode',
                                explanation: 'Loop bersarang menghemat penulisan kode'
                            }
                        ]
                    },
                    {
                        id: 's3_c2_m1',
                        stageName: 'Loop Kondisional',
                        status: 'locked',
                        prerequisiteStageId: 's2_c2_m1',
                        icon: 'repeat-once',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Loop dengan Kondisi',
                        questions: [
                            {
                                questionId: 'q1_s3_c2_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Loop While',
                                questionText: 'Apa perbedaan loop "ulangi sampai" dengan "ulangi n kali"?',
                                options: [
                                    'Ulangi sampai punya kondisi berhenti',
                                    'Ulangi n kali lebih cepat',
                                    'Tidak ada perbedaan',
                                    'Ulangi sampai hanya untuk angka'
                                ],
                                correctAnswer: 'Ulangi sampai punya kondisi berhenti',
                                explanation: 'Loop "ulangi sampai" berhenti saat kondisi terpenuhi'
                            },
                            {
                                questionId: 'q2_s3_c2_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Kondisi Berhenti',
                                questionText: 'Pada loop "ulangi sampai sentuh tepi", loop berhenti saat ____',
                                correctAnswer: 'menyentuh tepi',
                                placeholder: 'kondisi',
                                explanation: 'Kondisi berhenti adalah sentuh tepi'
                            },
                            {
                                questionId: 'q3_s3_c2_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Loop Terkontrol',
                                questionText: 'Apa output: Atur i=1, Ulangi sampai i>3 (BICARA i, atur i=i+1)',
                                codeStimulus: "Atur i = 1\nULANGI SAMPAI i > 3\n  BICARA i\n  Atur i = i + 1",
                                correctAnswer: '1, 2, 3',
                                explanation: 'Loop berjalan saat i <= 3'
                            },
                            {
                                questionId: 'q4_s3_c2_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Membuat Countdown',
                                questionText: 'Susun: Atur hitung=3, Ulangi sampai hitung=0 (BICARA hitung, tunggu 1, atur hitung=hitung-1)',
                                options: [
                                    'Atur hitung = 3',
                                    'ULANGI SAMPAI hitung = 0',
                                    'BICARA hitung',
                                    'TUNGGU 1',
                                    'Atur hitung = hitung - 1'
                                ],
                                correctSequence: [
                                    'Atur hitung = 3',
                                    'ULANGI SAMPAI hitung = 0',
                                    'BICARA hitung',
                                    'TUNGGU 1',
                                    'Atur hitung = hitung - 1'
                                ],
                                explanation: 'Urutan membuat hitung mundur'
                            },
                            {
                                questionId: 'q5_s3_c2_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Infinite Loop',
                                questionText: 'Bagaimana mencegah infinite loop?',
                                options: [
                                    'Selalu gunakan "ulangi n kali"',
                                    'Pastikan ada kondisi berhenti',
                                    'Hindari nested loop',
                                    'Gunakan jeda waktu'
                                ],
                                correctAnswer: 'Pastikan ada kondisi berhenti',
                                explanation: 'Kondisi berhenti mencegah loop tak terbatas'
                            }
                        ]
                    },
                    {
                        id: 's4_c2_m1',
                        stageName: 'Ujian Master Loop',
                        status: 'locked',
                        prerequisiteStageId: 's3_c2_m1',
                        icon: 'medal',
                        totalSoal: 5,
                        isCheckpoint: true,
                        konsep_kunci_coding_stage: 'Review Perulangan',
                        questions: [
                            {
                                questionId: 'q1_s4_c2_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Aplikasi Loop',
                                questionText: 'Manakah yang paling cocok menggunakan loop?',
                                options: [
                                    'Tampilkan pesan sekali',
                                    'Buat karakter berkedip 10 kali',
                                    'Atur posisi awal',
                                    'Mainkan satu suara'
                                ],
                                correctAnswer: 'Buat karakter berkedip 10 kali',
                                explanation: 'Loop untuk tugas berulang'
                            },
                            {
                                questionId: 'q2_s4_c2_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Loop Bersarang',
                                questionText: 'Loop di dalam loop disebut loop ____',
                                correctAnswer: 'bersarang',
                                placeholder: 'istilah',
                                explanation: 'Nested loop = loop bersarang'
                            },
                            {
                                questionId: 'q3_s4_c2_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Output Loop',
                                questionText: 'Apa output: Ulangi 3x (Ulangi 2x BICARA "X")',
                                correctAnswer: 'X X X X X X (6 kali)',
                                explanation: '3 iterasi luar x 2 iterasi dalam = 6'
                            },
                            {
                                questionId: 'q4_s4_c2_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Animasi Bintang',
                                questionText: 'Susun: Ulangi 5x (tambah klon bintang, tunggu 0.5)',
                                options: [
                                    'ULANGI 5 KALI',
                                    'Buat klon dari bintang',
                                    'TUNGGU 0.5 detik'
                                ],
                                correctSequence: [
                                    'ULANGI 5 KALI',
                                    'Buat klon dari bintang',
                                    'TUNGGU 0.5 detik'
                                ],
                                explanation: 'Membuat animasi bintang muncul bertahap'
                            },
                            {
                                questionId: 'q5_s4_c2_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Efisiensi',
                                questionText: 'Mengapa loop membuat kode lebih baik?',
                                options: [
                                    'Memperbesar ukuran file',
                                    'Membuat program lebih lambat',
                                    'Mengurangi pengulangan kode',
                                    'Menambah kompleksitas'
                                ],
                                correctAnswer: 'Mengurangi pengulangan kode',
                                explanation: 'Loop menghindari penulisan kode berulang'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'c3_m1',
                chapterName: '🔮 Variabel dan Sihir Data',
                chapterDescription: 'Kuasai penyimpanan data magis dalam variabel',
                icon: 'crystal-ball',
                stages: [
                    {
                        id: 's1_c3_m1',
                        stageName: 'Dasar Penyimpanan Magis',
                        status: 'locked',
                        prerequisiteStageId: 's4_c2_m1',
                        icon: 'variable-box',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Konsep Variabel',
                        questions: [
                            {
                                questionId: 'q1_s1_c3_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Definisi Variabel',
                                questionText: 'Apa itu variabel dalam pemrograman?',
                                options: [
                                    'Warna karakter',
                                    'Penyimpan nilai/data',
                                    'Jenis blok',
                                    'Tipe event'
                                ],
                                correctAnswer: 'Penyimpan nilai/data',
                                explanation: 'Variabel menyimpan data yang bisa berubah'
                            },
                            {
                                questionId: 'q2_s1_c3_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Membuat Variabel',
                                questionText: 'Untuk menyimpan skor, kita buat variabel bernama ____',
                                correctAnswer: 'skor',
                                placeholder: 'nama variabel',
                                explanation: 'Nama variabel sebaiknya deskriptif'
                            },
                            {
                                questionId: 'q3_s1_c3_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Operasi Variabel',
                                questionText: 'Apa nilai akhir: Atur x=5, Atur x=x+2, BICARA x',
                                correctAnswer: '7',
                                explanation: 'x diubah dari 5 menjadi 7'
                            },
                            {
                                questionId: 'q4_s1_c3_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Membuat Counter',
                                questionText: 'Susun: Atur counter=0, Ulangi 3x (ubah counter +1)',
                                options: [
                                    'Atur counter = 0',
                                    'ULANGI 3 KALI',
                                    'Ubah counter sebesar 1'
                                ],
                                correctSequence: [
                                    'Atur counter = 0',
                                    'ULANGI 3 KALI',
                                    'Ubah counter sebesar 1'
                                ],
                                explanation: 'Membuat penghitung sederhana'
                            },
                            {
                                questionId: 'q5_s1_c3_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Tipe Data',
                                questionText: 'Apa tipe data "Penyihir Hebat"?',
                                options: ['Angka', 'Boolean', 'Teks', 'Daftar'],
                                correctAnswer: 'Teks',
                                explanation: 'String = kumpulan karakter'
                            }
                        ]
                    },
                    {
                        id: 's2_c3_m1',
                        stageName: 'Operasi Data Magis',
                        status: 'locked',
                        prerequisiteStageId: 's1_c3_m1',
                        icon: 'calculator-variant',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Operator Variabel',
                        questions: [
                            {
                                questionId: 'q1_s2_c3_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Operator Aritmatika',
                                questionText: 'Operator apa untuk penjumlahan?',
                                options: ['-', '+', 'x', '/'],
                                correctAnswer: '+',
                                explanation: 'Tanda plus untuk penjumlahan'
                            },
                            {
                                questionId: 'q2_s2_c3_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Gabung Teks',
                                questionText: 'Untuk gabung "Sihir" dan "Kode" menjadi "SihirKode", gunakan operator ____',
                                correctAnswer: 'gabung',
                                placeholder: 'nama operator',
                                explanation: 'Operator gabung menyatukan teks'
                            },
                            {
                                questionId: 'q3_s2_c3_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Operasi Campuran',
                                questionText: 'Apa output: Atur a=10, b=5, BICARA a-b',
                                correctAnswer: '5',
                                explanation: '10 - 5 = 5'
                            },
                            {
                                questionId: 'q4_s2_c3_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Kalkulator Sederhana',
                                questionText: 'Susun: Minta "Masukkan angka", simpan di num1, minta lagi, simpan di num2, bicara jumlah',
                                options: [
                                    'Tanya "Masukkan angka" dan tunggu',
                                    'Atur num1 = jawaban',
                                    'Tanya "Masukkan angka" dan tunggu',
                                    'Atur num2 = jawaban',
                                    'BICARA num1 + num2'
                                ],
                                correctSequence: [
                                    'Tanya "Masukkan angka" dan tunggu',
                                    'Atur num1 = jawaban',
                                    'Tanya "Masukkan angka" dan tunggu',
                                    'Atur num2 = jawaban',
                                    'BICARA num1 + num2'
                                ],
                                explanation: 'Program menerima input dan menampilkan hasil'
                            },
                            {
                                questionId: 'q5_s2_c3_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Operator Perbandingan',
                                questionText: 'Operator mana yang benar untuk "sama dengan"?',
                                options: ['>', '<', '=', '=='],
                                correctAnswer: '==',
                                explanation: '== memeriksa kesamaan nilai'
                            }
                        ]
                    },
                    {
                        id: 's3_c3_m1',
                        stageName: 'Daftar Sihir',
                        status: 'locked',
                        prerequisiteStageId: 's2_c3_m1',
                        icon: 'format-list-bulleted',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Konsep List',
                        questions: [
                            {
                                questionId: 'q1_s3_c3_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Definisi List',
                                questionText: 'Apa itu list/daftar?',
                                options: [
                                    'Variabel tunggal',
                                    'Kumpulan nilai',
                                    'Operator matematika',
                                    'Jenis loop'
                                ],
                                correctAnswer: 'Kumpulan nilai',
                                explanation: 'List menyimpan banyak nilai dalam satu variabel'
                            },
                            {
                                questionId: 'q2_s3_c3_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Akses Elemen',
                                questionText: 'Untuk ambil item pertama list, gunakan indeks ____',
                                correctAnswer: '1',
                                placeholder: 'angka',
                                explanation: 'Indeks biasanya mulai dari 1'
                            },
                            {
                                questionId: 'q3_s3_c3_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Operasi List',
                                questionText: 'Jika list=[apel, jeruk], tambah pisang, bicara item 3',
                                correctAnswer: 'pisang',
                                explanation: 'Item ke-3 adalah pisang'
                            },
                            {
                                questionId: 'q4_s3_c3_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Membuat Daftar',
                                questionText: 'Susun: Buat list buah, tambah "apel", tambah "jeruk", bicara item 1',
                                options: [
                                    'Buat daftar buah',
                                    'Tambah apel ke buah',
                                    'Tambah jeruk ke buah',
                                    'BICARA item 1 dari buah'
                                ],
                                correctSequence: [
                                    'Buat daftar buah',
                                    'Tambah apel ke buah',
                                    'Tambah jeruk ke buah',
                                    'BICARA item 1 dari buah'
                                ],
                                explanation: 'Membuat dan mengakses list'
                            },
                            {
                                questionId: 'q5_s3_c3_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Panjang List',
                                questionText: 'Blok apa untuk cek jumlah item list?',
                                options: [
                                    'Item ke-X dari',
                                    'Panjang dari',
                                    'Ganti item ke-X',
                                    'Hapus item'
                                ],
                                correctAnswer: 'Panjang dari',
                                explanation: 'Panjang list = jumlah item'
                            }
                        ]
                    },
                    {
                        id: 's4_c3_m1',
                        stageName: 'Ujian Penyimpanan Data',
                        status: 'locked',
                        prerequisiteStageId: 's3_c3_m1',
                        icon: 'medal',
                        totalSoal: 5,
                        isCheckpoint: true,
                        konsep_kunci_coding_stage: 'Review Variabel',
                        questions: [
                            {
                                questionId: 'q1_s4_c3_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Penggunaan Variabel',
                                questionText: 'Kapan variabel diperlukan?',
                                options: [
                                    'Simpan nilai yang berubah',
                                    'Tampilkan pesan tetap',
                                    'Jalankan animasi',
                                    'Buat event'
                                ],
                                correctAnswer: 'Simpan nilai yang berubah',
                                explanation: 'Variabel untuk data dinamis'
                            },
                            {
                                questionId: 'q2_s4_c3_m1',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Inisialisasi',
                                questionText: 'Menyiapkan variabel pertama kali disebut ____',
                                correctAnswer: 'inisialisasi',
                                placeholder: 'istilah',
                                explanation: 'Inisialisasi = pemberian nilai awal'
                            },
                            {
                                questionId: 'q3_s4_c3_m1',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Operasi Variabel',
                                questionText: 'Apa nilai akhir: Atur x=3, Ubah x+2, BICARA x',
                                correctAnswer: '5',
                                explanation: '3 + 2 = 5'
                            },
                            {
                                questionId: 'q4_s4_c3_m1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Program Skor',
                                questionText: 'Susun: Atur skor=0, ketika koin disentuh (ubah skor+10)',
                                options: [
                                    'Atur skor = 0',
                                    'Ketika koin disentuh',
                                    'Ubah skor sebesar 10'
                                ],
                                correctSequence: [
                                    'Atur skor = 0',
                                    'Ketika koin disentuh',
                                    'Ubah skor sebesar 10'
                                ],
                                explanation: 'Membuat sistem koin'
                            },
                            {
                                questionId: 'q5_s4_c3_m1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Tipe Data',
                                questionText: 'Apa tipe data "true"?',
                                options: ['Angka', 'Boolean', 'Teks', 'List'],
                                correctAnswer: 'Boolean',
                                explanation: 'Boolean hanya punya nilai true/false'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'm2',
        materialName: '⚔️ Logika Petualangan Kode',
        materialDescription: 'Hadapi tantangan dengan senjata logika pemrograman',
        icon: 'sword-cross',
        backgroundColor: '#4FC3F7',
        chapters: [
            {
                id: 'c1_m2',
                chapterName: '🛡️ Pertahanan Kondisional',
                chapterDescription: 'Bentengi kode dengan keputusan logis',
                icon: 'shield',
                stages: [
                    {
                        id: 's1_c1_m2',
                        stageName: 'Dasar Jika-Maka',
                        status: 'locked',
                        prerequisiteStageId: 's4_c3_m1',
                        icon: 'gate-or',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Konsep Kondisional',
                        questions: [
                            {
                                questionId: 'q1_s1_c1_m2',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Blok Kondisi',
                                questionText: 'Blok apa untuk membuat keputusan "jika A maka B"?',
                                options: [
                                    'Blok Ulangi',
                                    'Blok JIKA-MAKA',
                                    'Blok Tunggu',
                                    'Blok Variabel'
                                ],
                                correctAnswer: 'Blok JIKA-MAKA',
                                explanation: 'Blok JIKA-MAKA untuk percabangan'
                            },
                            {
                                questionId: 'q2_s1_c1_m2',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Kondisi Boolean',
                                questionText: 'Kondisi "skor > 10" menghasilkan nilai ____',
                                correctAnswer: 'benar/salah',
                                placeholder: 'jenis nilai',
                                explanation: 'Kondisi menghasilkan boolean (true/false)'
                            },
                            {
                                questionId: 'q3_s1_c1_m2',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Eksekusi Kondisi',
                                questionText: 'Jika skor=8, apa output: JIKA skor>10 MAKA BICARA "Hebat!"',
                                codeStimulus: "JIKA skor > 10 MAKA\n  BICARA \"Hebat!\"",
                                correctAnswer: 'Tidak ada output',
                                explanation: 'Kondisi tidak terpenuhi'
                            },
                            {
                                questionId: 'q4_s1_c1_m2',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Membuat Alarm',
                                questionText: 'Susun: JIKA suhu > 30 MAKA BICARA "Panas!"',
                                options: ['JIKA suhu > 30', 'BICARA "Panas!"'],
                                correctSequence: ['JIKA suhu > 30', 'BICARA "Panas!"'],
                                explanation: 'Kondisi diikuti aksi'
                            },
                            {
                                questionId: 'q5_s1_c1_m2',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Operator Perbandingan',
                                questionText: 'Operator mana untuk "lebih kecil"?',
                                options: ['>', '<', '==', '!='],
                                correctAnswer: '<',
                                explanation: '< berarti less than'
                            }
                        ]
                    },
                ]
            },
            {
                id: 'c2_m2',
                chapterName: '🎯 Teknik Percabangan',
                chapterDescription: 'Kuasai seni pengambilan keputusan kompleks',
                icon: 'sign-direction',
                stages: [
                    // 5 stage
                ]
            },
            {
                id: 'c3_m2',
                chapterName: '💡 Logika Boolean',
                chapterDescription: 'Manipulasi kebenaran dengan operator logika',
                icon: 'lightbulb-on',
                stages: [
                    // 5 stage
                ]
            }
        ]
    },
    {
        id: 'm3',
        materialName: '🏰 Proyek Kode Akhir',
        materialDescription: 'Bangun kerajaan kode dengan semua keterampilanmu',
        icon: 'castle',
        backgroundColor: '#BA68C8',
        chapters: [
            {
                id: 'c1_m3',
                chapterName: '🕹️ Game Sederhana',
                chapterDescription: 'Rancang game pertamamu dengan mekanika dasar',
                icon: 'gamepad-variant',
                stages: [
                    // 5 stage
                ]
            },
            {
                id: 'c2_m3',
                chapterName: '📊 Aplikasi Interaktif',
                chapterDescription: 'Buat program responsif dengan input pengguna',
                icon: 'application',
                stages: [
                    // 5 stage
                ]
            },
            {
                id: 'c3_m3',
                chapterName: '🎨 Proyek Kreatif',
                chapterDescription: 'Tunjukkan semua yang telah kamu pelajari',
                icon: 'palette',
                stages: [
                    // 5 stage
                ]
            }
        ]
    },
    {
        id: 'py1',
        materialName: '🐍 Python Dasar',
        materialDescription: 'Pelajari bahasa pemrograman serbaguna dengan sintaks yang mudah dipahami',
        icon: 'language-python',
        backgroundColor: '#FFD54F',
        chapters: [
            {
                id: 'py_c1',
                chapterName: '📜 Dasar Pemrograman Python',
                chapterDescription: 'Pengenalan sintaks dan konsep fundamental Python',
                icon: 'alphabetical-variant',
                stages: [
                    {
                        id: 'py_s1',
                        stageName: 'Struktur Dasar & Variabel',
                        status: 'unlocked',
                        prerequisiteStageId: null,
                        icon: 'code-braces',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Sintaks Dasar Python',
                        questions: [
                            {
                                questionId: 'py_q1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Print Statement',
                                questionText: 'Bagaimana cara mencetak "Hello World" di Python?',
                                options: [
                                    'console.log("Hello World")',
                                    'print("Hello World")',
                                    'echo "Hello World"',
                                    'System.out.print("Hello World")'
                                ],
                                correctAnswer: 'print("Hello World")',
                                explanation: 'Python menggunakan fungsi print() untuk menampilkan output'
                            },
                            {
                                questionId: 'py_q2',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Deklarasi Variabel',
                                questionText: 'Deklarasi variabel umur dengan nilai 25: ____ = 25',
                                correctAnswer: 'umur',
                                placeholder: 'nama variabel',
                                explanation: 'Python menggunakan tanda sama dengan (=) untuk assignment'
                            },
                            {
                                questionId: 'py_q3',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Operasi Dasar',
                                questionText: 'Apa output dari: print(10 + 3 * 2)',
                                codeStimulus: "print(10 + 3 * 2)",
                                correctAnswer: '16',
                                explanation: 'Perkalian dieksekusi sebelum penjumlahan (3*2=6, 10+6=16)'
                            },
                            {
                                questionId: 'py_q4',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Tipe Data',
                                questionText: 'Apa tipe data dari: 3.14?',
                                options: ['int', 'str', 'float', 'bool'],
                                correctAnswer: 'float',
                                explanation: 'Angka desimal di Python bertipe float'
                            },
                            {
                                questionId: 'py_q5',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Program Sederhana',
                                questionText: 'Susun kode: Cetak "Nama saya", input nama, cetak "Halo" + nama',
                                options: [
                                    'nama = input("Masukkan nama: ")',
                                    'print("Nama saya")',
                                    'print("Halo " + nama)'
                                ],
                                correctSequence: [
                                    'print("Nama saya")',
                                    'nama = input("Masukkan nama: ")',
                                    'print("Halo " + nama)'
                                ],
                                explanation: 'Urutan eksekusi: cetak → input → cetak hasil'
                            }
                        ]
                    },
                    {
                        id: 'py_s2',
                        stageName: 'Struktur Kontrol',
                        status: 'locked',
                        prerequisiteStageId: 'py_s1',
                        icon: 'gate-or',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Kondisional dan Perulangan',
                        questions: [
                            {
                                questionId: 'py_q6',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'If Statement',
                                questionText: 'Bagaimana penulisan if statement yang benar?',
                                options: [
                                    'if (x > 10) { }',
                                    'if x > 10:',
                                    'if x > 10 then',
                                    'when x > 10:'
                                ],
                                correctAnswer: 'if x > 10:',
                                explanation: 'Python menggunakan titik dua (:) tanpa tanda kurung'
                            },
                            {
                                questionId: 'py_q7',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'For Loop',
                                questionText: 'Loop untuk mencetak angka 1-5: for i in ____(1,6):',
                                correctAnswer: 'range',
                                placeholder: 'fungsi',
                                explanation: 'range() menghasilkan urutan angka'
                            },
                            {
                                questionId: 'py_q8',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'While Loop',
                                questionText: 'Apa output: x=3; while x>0: print(x); x-=1',
                                codeStimulus: "x = 3\nwhile x > 0:\n  print(x)\n  x -= 1",
                                correctAnswer: '3\n2\n1',
                                explanation: 'Loop berjalan selama x > 0, mengurangi x setiap iterasi'
                            },
                            {
                                questionId: 'py_q9',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Kondisi Majemuk',
                                questionText: 'Operator untuk "dan" logika di Python?',
                                options: ['&&', 'AND', 'and', '&'],
                                correctAnswer: 'and',
                                explanation: 'Python menggunakan kata kunci and/or'
                            },
                            {
                                questionId: 'py_q10',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Program FizzBuzz',
                                questionText: 'Susun: Untuk angka 1-10, cetak "Fizz" jika kelipatan 3, "Buzz" jika kelipatan 5',
                                options: [
                                    'for i in range(1,11):',
                                    'if i % 3 == 0: print("Fizz")',
                                    'elif i % 5 == 0: print("Buzz")',
                                    'else: print(i)'
                                ],
                                correctSequence: [
                                    'for i in range(1,11):',
                                    'if i % 3 == 0: print("Fizz")',
                                    'elif i % 5 == 0: print("Buzz")',
                                    'else: print(i)'
                                ],
                                explanation: 'Urutan pengecekan: kelipatan 3 → kelipatan 5 → lainnya'
                            }
                        ]
                    },
                    {
                        id: 'py_s3',
                        stageName: 'Tipe Data Lanjutan',
                        status: 'locked',
                        prerequisiteStageId: 'py_s2',
                        icon: 'format-list-bulleted',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'List, Tuple, Dictionary',
                        questions: [
                            {
                                questionId: 'py_q11',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'List Operation',
                                questionText: 'Cara menambah elemen ke list: my_list.____(5)',
                                options: ['insert', 'add', 'append', 'push'],
                                correctAnswer: 'append',
                                explanation: 'append() menambah elemen di akhir list'
                            },
                            {
                                questionId: 'py_q12',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Dictionary Access',
                                questionText: 'Akses nilai "umur" di dict: siswa = {"nama": "Andi", "umur": 12}; print(siswa["____"])',
                                correctAnswer: 'umur',
                                placeholder: 'key',
                                explanation: 'Dictionary diakses menggunakan key'
                            },
                            {
                                questionId: 'py_q13',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Tuple Immutability',
                                questionText: 'Apa yang terjadi: angka = (1,2,3); angka[1] = 5?',
                                correctAnswer: 'Error',
                                explanation: 'Tuple bersifat immutable (tidak bisa diubah)'
                            },
                            {
                                questionId: 'py_q14',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'List vs Tuple',
                                questionText: 'Apa perbedaan utama list dan tuple?',
                                options: [
                                    'List immutable, tuple mutable',
                                    'List untuk angka, tuple untuk teks',
                                    'List mutable, tuple immutable',
                                    'List menggunakan (), tuple menggunakan []'
                                ],
                                correctAnswer: 'List mutable, tuple immutable',
                                explanation: 'List bisa diubah, tuple tidak bisa diubah setelah dibuat'
                            },
                            {
                                questionId: 'py_q15',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Manipulasi Data',
                                questionText: 'Susun: Buat list angka, tambah 5, hapus elemen pertama, cetak',
                                options: [
                                    'angka = [1,2,3]',
                                    'angka.append(5)',
                                    'angka.pop(0)',
                                    'print(angka)'
                                ],
                                correctSequence: [
                                    'angka = [1,2,3]',
                                    'angka.append(5)',
                                    'angka.pop(0)',
                                    'print(angka)'
                                ],
                                explanation: 'Hasil akhir: [2, 3, 5]'
                            }
                        ]
                    },
                    {
                        id: 'py_s4',
                        stageName: 'Ujian Python Dasar',
                        status: 'locked',
                        prerequisiteStageId: 'py_s3',
                        icon: 'medal',
                        totalSoal: 5,
                        isCheckpoint: true,
                        konsep_kunci_coding_stage: 'Review Python Fundamental',
                        questions: [
                            {
                                questionId: 'py_q16',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Fungsi Dasar',
                                questionText: 'Fungsi untuk menghitung panjang list?',
                                options: ['count()', 'size()', 'length()', 'len()'],
                                correctAnswer: 'len()',
                                explanation: 'len() mengembalikan jumlah elemen'
                            },
                            {
                                questionId: 'py_q17',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'String Formatting',
                                questionText: 'Format string: nama="Budi"; print(f"____ {nama}")',
                                correctAnswer: 'Halo',
                                placeholder: 'teks',
                                explanation: 'f-string memungkinkan penyisipan variabel'
                            },
                            {
                                questionId: 'py_q18',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'List Comprehension',
                                questionText: 'Apa output: [x*2 for x in range(3)]',
                                correctAnswer: '[0, 2, 4]',
                                explanation: 'Membuat list: [0*2, 1*2, 2*2]'
                            },
                            {
                                questionId: 'py_q19',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Error Handling',
                                questionText: 'Blok untuk menangani error di Python?',
                                options: ['try', 'catch', 'handle', 'exception'],
                                correctAnswer: 'try',
                                explanation: 'try-except untuk penanganan error'
                            },
                            {
                                questionId: 'py_q20',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Program Sederhana',
                                questionText: 'Susun: Fungsi yang menerima angka, kembalikan kuadratnya',
                                options: [
                                    'def kuadrat(angka):',
                                    'return angka ** 2',
                                    'print(kuadrat(4))'
                                ],
                                correctSequence: [
                                    'def kuadrat(angka):',
                                    'return angka ** 2',
                                    'print(kuadrat(4))'
                                ],
                                explanation: 'Hasil: 16'
                            }
                        ]
                    }
                ]
            },
            // Chapter 2 dan 3 bisa ditambahkan di sini...
        ]
    },

    // ====================== MATERI JAVASCRIPT DASAR ======================
    {
        id: 'js1',
        materialName: '🟨 JavaScript Dasar',
        materialDescription: 'Pelajari bahasa pemrograman web dengan interaktivitas tinggi',
        icon: 'language-javascript',
        backgroundColor: '#4FC3F7',
        chapters: [
            {
                id: 'js_c1',
                chapterName: '🌐 Dasar Pemrograman Web',
                chapterDescription: 'Pengenalan sintaks JavaScript untuk pemula',
                icon: 'web',
                stages: [
                    {
                        id: 'js_s1',
                        stageName: 'Sintaks Dasar & DOM',
                        status: 'unlocked',
                        prerequisiteStageId: null,
                        icon: 'code-json',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'JavaScript Fundamental',
                        questions: [
                            {
                                questionId: 'js_q1',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Output Console',
                                questionText: 'Bagaimana cara mencetak ke console di JavaScript?',
                                options: [
                                    'print("Hello")',
                                    'console.log("Hello")',
                                    'log.console("Hello")',
                                    'echo "Hello"'
                                ],
                                correctAnswer: 'console.log("Hello")',
                                explanation: 'console.log() untuk menampilkan pesan di console browser'
                            },
                            {
                                questionId: 'js_q2',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Deklarasi Variabel',
                                questionText: 'Deklarasi variabel konstanta PI: ____ PI = 3.14',
                                correctAnswer: 'const',
                                placeholder: 'kata kunci',
                                explanation: 'const untuk variabel konstan, let untuk yang bisa diubah'
                            },
                            {
                                questionId: 'js_q3',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Type Coercion',
                                questionText: 'Apa output: console.log("5" + 3)',
                                codeStimulus: 'console.log("5" + 3)',
                                correctAnswer: '"53"',
                                explanation: 'JavaScript menggabungkan string dan angka menjadi string'
                            },
                            {
                                questionId: 'js_q4',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'DOM Manipulation',
                                questionText: 'Cara memilih elemen dengan id "judul"?',
                                options: [
                                    'document.getElement("judul")',
                                    'document.querySelector("#judul")',
                                    'document.getElementById("judul")',
                                    'document.select("#judul")'
                                ],
                                correctAnswer: 'document.getElementById("judul")',
                                explanation: 'getElementById() adalah metode standar untuk memilih elemen'
                            },
                            {
                                questionId: 'js_q5',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Event Handling',
                                questionText: 'Susun: Pilih tombol, tambah event click, tampilkan alert',
                                options: [
                                    'document.querySelector("button").addEventListener("click", myFunction)',
                                    'function myFunction() { alert("Diklik!"); }',
                                    'const button = document.querySelector("button");'
                                ],
                                correctSequence: [
                                    'const button = document.querySelector("button");',
                                    'button.addEventListener("click", myFunction)',
                                    'function myFunction() { alert("Diklik!"); }'
                                ],
                                explanation: 'Urutan: pilih elemen → pasang event handler → definisi fungsi'
                            }
                        ]
                    },
                    {
                        id: 'js_s2',
                        stageName: 'Struktur Kontrol',
                        status: 'locked',
                        prerequisiteStageId: 'js_s1',
                        icon: 'swap-horizontal',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Kondisional dan Perulangan JS',
                        questions: [
                            {
                                questionId: 'js_q6',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'If Statement',
                                questionText: 'Sintaks if statement yang benar?',
                                options: [
                                    'if (x > 10) then',
                                    'if x > 10:',
                                    'if (x > 10) { }',
                                    'when x > 10'
                                ],
                                correctAnswer: 'if (x > 10) { }',
                                explanation: 'JavaScript menggunakan tanda kurung dan kurung kurawal'
                            },
                            {
                                questionId: 'js_q7',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'For Loop',
                                questionText: 'Loop untuk 0-4: for(let i=0; i < ____; i++) { }',
                                correctAnswer: '5',
                                placeholder: 'angka',
                                explanation: 'Loop berjalan selama i < 5 (0,1,2,3,4)'
                            },
                            {
                                questionId: 'js_q8',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'While Loop',
                                questionText: 'Apa output: let x=3; while(x--){console.log(x)}',
                                correctAnswer: '2\n1\n0',
                                explanation: 'Operator post-decrement (x--) mengurangi setelah evaluasi'
                            },
                            {
                                questionId: 'js_q9',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Switch Case',
                                questionText: 'Pernyataan untuk keluar dari switch case?',
                                options: ['break', 'exit', 'return', 'continue'],
                                correctAnswer: 'break',
                                explanation: 'break mencegah eksekusi jatuh ke case berikutnya'
                            },
                            {
                                questionId: 'js_q10',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'FizzBuzz JS',
                                questionText: 'Susun: Untuk i=1-15, cetak FizzBuzz jika kelipatan 3 dan 5',
                                options: [
                                    'if(i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz")',
                                    'for(let i=1; i<=15; i++) {',
                                    'else console.log(i)'
                                ],
                                correctSequence: [
                                    'for(let i=1; i<=15; i++) {',
                                    'if(i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz")',
                                    'else console.log(i)'
                                ],
                                explanation: 'Pengecekan FizzBuzz harus sebelum kondisi tunggal'
                            }
                        ]
                    },
                    {
                        id: 'js_s3',
                        stageName: 'Fungsi dan Scope',
                        status: 'locked',
                        prerequisiteStageId: 'js_s2',
                        icon: 'function',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Function in JavaScript',
                        questions: [
                            {
                                questionId: 'js_q11',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Function Declaration',
                                questionText: 'Cara mendeklarasi fungsi di JavaScript?',
                                options: [
                                    'function myFunc() {}',
                                    'def myFunc() {}',
                                    'const myFunc = () => {}',
                                    'func myFunc() {}'
                                ],
                                correctAnswer: 'function myFunc() {}',
                                explanation: 'Ini adalah function declaration tradisional'
                            },
                            {
                                questionId: 'js_q12',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Arrow Function',
                                questionText: 'Konversi ke arrow function: const sum = function(a,b) { return a+b }',
                                correctAnswer: '(a,b) => a + b',
                                placeholder: 'sintaks arrow function',
                                explanation: 'Arrow function memiliki sintaks lebih ringkas'
                            },
                            {
                                questionId: 'js_q13',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Scope Variabel',
                                questionText: 'Apa output: let x=5; function test(){ let x=10; } test(); console.log(x)',
                                correctAnswer: '5',
                                explanation: 'Variabel di dalam fungsi memiliki scope lokal'
                            },
                            {
                                questionId: 'js_q14',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Callback Function',
                                questionText: 'Apa itu callback function?',
                                options: [
                                    'Fungsi yang mengembalikan fungsi',
                                    'Fungsi yang dipanggil sebagai argumen',
                                    'Fungsi untuk menangani error',
                                    'Fungsi yang dipanggil berulang'
                                ],
                                correctAnswer: 'Fungsi yang dipanggil sebagai argumen',
                                explanation: 'Callback adalah fungsi yang dilewatkan ke fungsi lain'
                            },
                            {
                                questionId: 'js_q15',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Higher-Order Function',
                                questionText: 'Susun: Gunakan map untuk mengalikan semua elemen array dengan 2',
                                options: [
                                    'const doubled = numbers.map(num => num * 2)',
                                    'const numbers = [1,2,3]',
                                    'console.log(doubled)'
                                ],
                                correctSequence: [
                                    'const numbers = [1,2,3]',
                                    'const doubled = numbers.map(num => num * 2)',
                                    'console.log(doubled)'
                                ],
                                explanation: 'Hasil: [2, 4, 6]'
                            }
                        ]
                    },
                    {
                        id: 'js_s4',
                        stageName: 'Ujian JavaScript Dasar',
                        status: 'locked',
                        prerequisiteStageId: 'js_s3',
                        icon: 'medal',
                        totalSoal: 5,
                        isCheckpoint: true,
                        konsep_kunci_coding_stage: 'Review JavaScript Fundamental',
                        questions: [
                            {
                                questionId: 'js_q16',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'Event Bubbling',
                                questionText: 'Apa yang terjadi saat event klik pada elemen child?',
                                options: [
                                    'Hanya child menerima event',
                                    'Event menyebar ke parent (bubbling)',
                                    'Event hanya diterima document',
                                    'Tidak ada yang terjadi'
                                ],
                                correctAnswer: 'Event menyebar ke parent (bubbling)',
                                explanation: 'Event bubbling adalah perilaku default di DOM'
                            },
                            {
                                questionId: 'js_q17',
                                questionType: 'fill-in-the-blank',
                                konsep_kunci_coding: 'Async/Await',
                                questionText: 'Kata kunci untuk menunggu promise: ____ fetchData()',
                                correctAnswer: 'await',
                                placeholder: 'kata kunci',
                                explanation: 'await digunakan di dalam async function'
                            },
                            {
                                questionId: 'js_q18',
                                questionType: 'guess-output',
                                konsep_kunci_coding: 'Closure',
                                questionText: 'Apa output: function outer() { let x=5; return function() { return x++; } } const f=outer(); f(); f();',
                                correctAnswer: '5 dan 6',
                                explanation: 'Closure menyimpan referensi variabel x'
                            },
                            {
                                questionId: 'js_q19',
                                questionType: 'multiple-choice',
                                konsep_kunci_coding: 'JSON Handling',
                                questionText: 'Cara mengonversi string JSON ke objek JavaScript?',
                                options: [
                                    'JSON.parse()',
                                    'JSON.stringify()',
                                    'JSON.toObject()',
                                    'JSON.convert()'
                                ],
                                correctAnswer: 'JSON.parse()',
                                explanation: 'JSON.parse() untuk mengubah string JSON menjadi objek'
                            },
                            {
                                questionId: 'js_q20',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Fetch API',
                                questionText: 'Susun: Fetch data dari API, konversi ke JSON, tampilkan',
                                options: [
                                    '.then(response => response.json())',
                                    'fetch("https://api.example.com/data")',
                                    '.then(data => console.log(data))'
                                ],
                                correctSequence: [
                                    'fetch("https://api.example.com/data")',
                                    '.then(response => response.json())',
                                    '.then(data => console.log(data))'
                                ],
                                explanation: 'Urutan operasi fetch: request → konversi JSON → gunakan data'
                            }
                        ]
                    }
                ]
            },
        ]
    }
];

export default materials;