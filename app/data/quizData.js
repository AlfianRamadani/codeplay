export const materials = [
    {
        id: '1',
        materialName: '🪄 Dasar-Dasar Ajaib Coding',
        materialDescription: 'Pelajari kekuatan sihir di balik setiap baris kode!',
        icon: 'school-outline',
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
    }
];

export default materials;