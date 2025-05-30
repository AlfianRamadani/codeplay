export const materials = [
    {
        id: '1',
        materialName: '🪄 Dasar-Dasar Ajaib Coding',
        materialDescription: 'Pelajari kekuatan sihir di balik setiap baris kode!',
        icon: 'school-outline',
        backgroundColor: '#81C784',
        chapters: [
            {
                id: 'ch1_1',
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
                                questionId: 'q1_1_2_seq1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Logika Urutan',
                                questionText: 'Susunlah blok berikut agar Ksatria mengambil pedang: (1) Maju 2 langkah, (2) Belok Kanan, (3) Ambil Pedang.',
                                correctSequence: ['Maju 2 langkah', 'Belok Kanan', 'Ambil Pedang'],
                                options: ['Ambil Pedang', 'Belok Kanan', 'Maju 2 langkah'],
                                explanation: 'Ksatria harus maju dulu, lalu belok, baru bisa mengambil pedang.'
                            },
                            {
                                questionId: 'q1_1_2_mc1',
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
                                questionId: 'q1_1_2_mc2',
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
                id: 'ch1_2',
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
            // CHAPTER 3, 4, 5 akan mengikuti pola yang sama, mengisi masing-masing stage dengan 5 soal.
            // Saya akan lanjutkan dengan Chapter 3.
            // CHAPTER 3: Kekuatan Logika Kondisi
            {
                id: 'ch1_3',
                chapterName: '🤔 Kekuatan Logika Kondisi (Jika-Maka)',
                chapterDescription: 'Ajari programmu membuat keputusan sendiri!',
                icon: 'decision-outline',
                stages: [
                    {
                        id: 's1_3_1',
                        stageName: 'Blok "Jika ... Maka ..."',
                        status: 'locked',
                        prerequisiteStageId: 's1_2_4',
                        icon: 'arrow-decision-outline',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Pengenalan Kondisi If',
                        questions: [
                            { questionId: 'q1_3_1_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Struktur Blok Kondisi', questionText: 'Bagian mana dari blok kondisi yang akan dijalankan jika syaratnya TERPENUHI?', options: ['Bagian "Jika Tidak"', 'Bagian "Maka"', 'Bagian "Lain Kali"', 'Tidak ada'], correctAnswer: 'Bagian "Maka"', explanation: 'Jika kondisi pada blok "Jika" terpenuhi (benar), maka perintah di dalam bagian "Maka" akan dijalankan.' },
                            { questionId: 'q1_3_1_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Syarat Kondisi', questionText: 'Agar blok "Maka" dijalankan, syarat di dalam "Jika" harus bernilai ____.', correctAnswer: 'benar', placeholder: 'nilai boolean', explanation: 'Kondisi (syarat) dievaluasi menjadi nilai boolean (benar atau salah).' },
                            { questionId: 'q1_3_1_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Operator Perbandingan', questionText: 'Simbol ">" dalam syarat kondisi berarti...', options: ['Sama dengan', 'Tidak sama dengan', 'Lebih kecil dari', 'Lebih besar dari'], correctAnswer: 'Lebih besar dari', explanation: 'Operator perbandingan digunakan untuk membandingkan dua nilai.' },
                            { questionId: 'q1_3_1_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Eksekusi Kondisi Sederhana', codeStimulus: "ATUR SKOR = 10\nJIKA SKOR > 5 MAKA\n  BICARA \"Menang!\"\nAKHIR JIKA", questionText: 'Apa output dari kode ini?', correctAnswer: 'Menang!', explanation: 'Karena 10 > 5, syarat terpenuhi dan blok "Maka" dijalankan.' },
                            { questionId: 'q1_3_1_mc3', questionType: 'multiple-choice', konsep_kunci_coding: 'Contoh Kondisi', questionText: 'Manakah yang BUKAN contoh syarat kondisi?', options: ['Jika menyentuh dinding', 'Jika skor = 100', 'Maju 5 langkah', 'Jika warna biru disentuh'], correctAnswer: 'Maju 5 langkah', explanation: '"Maju 5 langkah" adalah perintah aksi, bukan syarat kondisi yang menghasilkan benar/salah.' }
                        ]
                    },
                    {
                        id: 's1_3_2',
                        stageName: 'Dengan "Jika Tidak ..."',
                        status: 'locked',
                        prerequisiteStageId: 's1_3_1',
                        icon: 'swap-horizontal-bold',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Kondisi If-Else',
                        questions: [
                            { questionId: 'q1_3_2_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Logika Else', questionText: 'Kapan bagian "Jika Tidak" (Else) pada blok kondisi akan dijalankan?', options: ['Selalu dijalankan', 'Jika syarat "Jika" (If) TIDAK terpenuhi', 'Jika syarat "Jika" (If) terpenuhi', 'Tidak pernah dijalankan'], correctAnswer: 'Jika syarat "Jika" (If) TIDAK terpenuhi', explanation: 'Bagian "Else" adalah alternatif jika kondisi "If" bernilai salah.' },
                            { questionId: 'q1_3_2_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Struktur If-Else', questionText: 'Blok "Jika...Maka..." bisa ditambahkan bagian ____ untuk aksi alternatif.', correctAnswer: 'Jika Tidak', placeholder: 'nama bagian', explanation: 'Bagian "Jika Tidak" atau "Else" menangani kasus ketika kondisi awal tidak benar.' },
                            { questionId: 'q1_3_2_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Eksekusi If-Else', codeStimulus: "ATUR POIN = 3\nJIKA POIN > 5 MAKA\n  BICARA \"Luar Biasa!\"\nJIKA TIDAK MAKA\n  BICARA \"Coba Lagi!\"\nAKHIR JIKA", questionText: 'Apa output dari kode ini?', correctAnswer: 'Coba Lagi!', explanation: 'Karena 3 tidak lebih besar dari 5, bagian "Jika Tidak" (Else) yang dijalankan.' },
                            { questionId: 'q1_3_2_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Manfaat If-Else', questionText: 'Mengapa kita menggunakan struktur "Jika...Maka...Jika Tidak..."?', options: ['Agar program lebih rumit', 'Untuk menjalankan kedua bagian (Maka dan Jika Tidak) sekaligus', 'Untuk memberikan dua jalur eksekusi berbeda berdasarkan satu syarat', 'Untuk mengulang perintah'], correctAnswer: 'Untuk memberikan dua jalur eksekusi berbeda berdasarkan satu syarat', explanation: 'If-Else memungkinkan program memilih satu dari dua blok perintah untuk dijalankan.' },
                            { questionId: 'q1_3_2_seq1', questionType: 'sequence', konsep_kunci_coding: 'Menyusun Blok If-Else', questionText: 'Susun bagian blok kondisi: (1) JIKA (syarat), (2) MAKA (aksi1), (3) JIKA TIDAK, (4) MAKA (aksi2)', options: ['JIKA (syarat)', 'MAKA (aksi1)', 'JIKA TIDAK', 'MAKA (aksi2)'], correctSequence: ['JIKA (syarat)', 'MAKA (aksi1)', 'JIKA TIDAK', 'MAKA (aksi2)'], explanation: 'Ini adalah urutan standar blok If-Then-Else.' }
                        ]
                    },
                    {
                        id: 's1_3_3',
                        stageName: 'Sensor Ajaib (Kondisi dengan Input)',
                        status: 'locked',
                        prerequisiteStageId: 's1_3_2',
                        icon: 'leak',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Kondisi Berdasarkan Sensor/Input',
                        questions: [
                            { questionId: 'q1_3_3_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Input Sensor', questionText: 'Contoh kondisi yang menggunakan input sensor adalah...', options: ['Jika skor > 10', 'Jika menyentuh warna merah', 'Jika tombol spasi ditekan', 'Semua benar'], correctAnswer: 'Semua benar', explanation: 'Banyak kondisi bisa bergantung pada input dari sensor, papan ketik, atau variabel lain.' },
                            { questionId: 'q1_3_3_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Sensor Jarak', questionText: 'Blok kondisi "Jika jarak ke objek < 10" akan bernilai benar jika karakter ____ dengan objek.', correctAnswer: 'dekat', placeholder: 'kata sifat', explanation: 'Sensor jarak mengukur seberapa jauh karakter dari objek lain.' },
                            { questionId: 'q1_3_3_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Input Keyboard', questionText: 'Blok "Jika tombol [A] ditekan" adalah contoh kondisi berdasarkan input dari...', options: ['Mouse', 'Sensor Suara', 'Keyboard', 'Sensor Cahaya'], correctAnswer: 'Keyboard', explanation: 'Program bisa merespon penekanan tombol tertentu pada keyboard.' },
                            { questionId: 'q1_3_3_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Kondisi dan Gerakan', codeStimulus: "JIKA TOMBOL PANAH ATAS DITEKAN MAKA\n  GERAK KE ATAS\nAKHIR JIKA", questionText: 'Apa yang terjadi jika pengguna menekan tombol panah atas?', correctAnswer: 'Karakter bergerak ke atas', explanation: 'Aksi "GERAK KE ATAS" hanya terjadi jika kondisi penekanan tombol panah atas terpenuhi.' },
                            { questionId: 'q1_3_3_mc3', questionType: 'multiple-choice', konsep_kunci_coding: 'Nilai Boolean dari Sensor', questionText: 'Output dari blok sensor (misal "menyentuh tepi?") biasanya berupa nilai...', options: ['Angka', 'Teks', 'Boolean (Benar/Salah)', 'Warna'], correctAnswer: 'Boolean (Benar/Salah)', explanation: 'Blok sensor kondisi menghasilkan nilai benar atau salah yang digunakan dalam blok "Jika".' }
                        ]
                    },
                    { // UJIAN CHAPTER 3
                        id: 's1_3_4',
                        stageName: 'Ujian Penguasa Logika',
                        status: 'locked',
                        prerequisiteStageId: 's1_3_3',
                        icon: 'flag-checkered',
                        totalSoal: 5,
                        isCheckpoint: true,
                        konsep_kunci_coding_stage: 'Review Konsep Kondisi',
                        questions: [
                            { questionId: 'q_uji3_1_mc', questionType: 'multiple-choice', konsep_kunci_coding: 'Kombinasi Loop dan Kondisi', questionText: 'Untuk membuat karakter patroli dan berbalik jika menabrak dinding, kita butuh blok...', options: ['Hanya Loop', 'Hanya Kondisi', 'Loop dan Kondisi', 'Variabel saja'], correctAnswer: 'Loop dan Kondisi', explanation: 'Loop untuk patroli terus menerus, kondisi untuk memeriksa tabrakan dinding.' },
                            { questionId: 'q_uji3_2_fill', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Operator Logika AND', questionText: 'Jika kita ingin dua syarat terpenuhi sekaligus, kita menggunakan operator logika ____.', correctAnswer: 'DAN', placeholder: 'operator', explanation: 'Operator DAN (AND) menghasilkan benar hanya jika kedua syarat yang dihubungkannya benar.' },
                            { questionId: 'q_uji3_3_guess', questionType: 'guess-output', konsep_kunci_coding: 'Kondisi Majemuk', codeStimulus: "ATUR USIA = 7\nJIKA USIA > 5 DAN USIA < 10 MAKA\n  BICARA \"Anak-anak\"\nJIKA TIDAK MAKA\n  BICARA \"Bukan anak-anak\"\nAKHIR JIKA", questionText: 'Apa outputnya?', correctAnswer: 'Anak-anak', explanation: 'Karena usia 7 memenuhi kedua syarat (lebih dari 5 DAN kurang dari 10).' },
                            { questionId: 'q_uji3_4_mc', questionType: 'multiple-choice', konsep_kunci_coding: 'Operator Logika OR', questionText: 'Kondisi "Jika warna MERAH disentuh ATAU warna BIRU disentuh" akan benar jika...', options: ['Hanya warna merah disentuh', 'Hanya warna biru disentuh', 'Salah satu atau kedua warna disentuh', 'Tidak ada warna yang disentuh'], correctAnswer: 'Salah satu atau kedua warna disentuh', explanation: 'Operator ATAU (OR) menghasilkan benar jika minimal salah satu syaratnya benar.' },
                            { questionId: 'q_uji3_5_seq', questionType: 'sequence', konsep_kunci_coding: 'Logika Sederhana Pintu Otomatis', questionText: 'Susun blok untuk pintu otomatis: (1) JIKA ADA ORANG DEKAT, (2) MAKA BUKA PINTU, (3) JIKA TIDAK, (4) MAKA TUTUP PINTU.', options: ['JIKA ADA ORANG DEKAT', 'MAKA BUKA PINTU', 'JIKA TIDAK', 'MAKA TUTUP PINTU'], correctSequence: ['JIKA ADA ORANG DEKAT', 'MAKA BUKA PINTU', 'JIKA TIDAK', 'MAKA TUTUP PINTU'], explanation: 'Ini adalah logika dasar if-else untuk pintu otomatis berdasarkan sensor kedekatan.' }
                        ]
                    }
                ]
            },
            // CHAPTER 4: Kotak Ajaib Variabel
            {
                id: 'ch1_4',
                chapterName: '📦 Kotak Ajaib Variabel',
                chapterDescription: 'Simpan dan gunakan kembali informasi dengan variabel!',
                icon: 'variable-box',
                stages: [
                    {
                        id: 's1_4_1',
                        stageName: 'Membuat Kotak Penyimpanan',
                        status: 'locked',
                        prerequisiteStageId: 's1_3_4',
                        icon: 'package-variant-closed-plus',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Pengenalan Variabel',
                        questions: [
                            { questionId: 'q1_4_1_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Definisi Variabel', questionText: "Variabel digunakan untuk ____ data atau informasi di dalam program.", correctAnswer: 'menyimpan', placeholder: 'kata kerja', explanation: 'Variabel adalah nama dari sebuah lokasi memori yang digunakan untuk menyimpan data.' },
                            { questionId: 'q1_4_1_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Nama Variabel', questionText: 'Manakah nama variabel yang baik?', options: ['1skor', 'skor pemain', 'SkorPemain', 'data skor'], correctAnswer: 'SkorPemain', explanation: 'Nama variabel sebaiknya deskriptif, tidak diawali angka, dan sering menggunakan camelCase atau snake_case.' },
                            { questionId: 'q1_4_1_fill2', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Tipe Data Variabel', questionText: 'Variabel bisa menyimpan berbagai jenis ____, seperti angka, teks, atau boolean.', correctAnswer: 'data', placeholder: 'kata benda', explanation: 'Tipe data menentukan jenis informasi yang bisa disimpan variabel.' },
                            { questionId: 'q1_4_1_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Manfaat Variabel', questionText: 'Mengapa kita menggunakan variabel?', options: ['Membuat program lebih sulit dibaca', 'Untuk menyimpan nilai yang bisa berubah atau digunakan berulang kali', 'Agar program berjalan lebih lambat', 'Hanya untuk angka'], correctAnswer: 'Untuk menyimpan nilai yang bisa berubah atau digunakan berulang kali', explanation: 'Variabel membuat kode lebih fleksibel dan mudah dikelola.' },
                            { questionId: 'q1_4_1_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Deklarasi Variabel (Pseudo)', codeStimulus: "BUAT VARIABEL NAMA_ANDA", questionText: 'Apa yang terjadi setelah perintah ini?', correctAnswer: 'Sebuah variabel bernama NAMA_ANDA dibuat (belum ada nilai)', explanation: 'Ini adalah langkah membuat atau mendeklarasikan variabel.' }
                        ]
                    },
                    {
                        id: 's1_4_2',
                        stageName: 'Mengisi dan Mengubah Isi Kotak',
                        status: 'locked',
                        prerequisiteStageId: 's1_4_1',
                        icon: 'cube-send',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Memberi dan Mengubah Nilai Variabel',
                        questions: [
                            { questionId: 'q1_4_2_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Assignment Variabel', questionText: 'Perintah "atur SKOR menjadi 0" berarti...', options: ['Menghapus variabel SKOR', 'Memberi nilai awal 0 pada SKOR', 'Membandingkan SKOR dengan 0', 'Menambah SKOR dengan 0'], correctAnswer: 'Memberi nilai awal 0 pada SKOR', explanation: 'Ini adalah proses memberi nilai (assignment) ke sebuah variabel.' },
                            { questionId: 'q1_4_2_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Mengubah Nilai Variabel', questionText: 'Setelah "atur SKOR menjadi 10", jika ada perintah "atur SKOR menjadi SKOR + 5", nilai SKOR sekarang adalah ____.', correctAnswer: '15', placeholder: 'angka', explanation: 'Nilai variabel bisa diubah berdasarkan nilai sebelumnya.' },
                            { questionId: 'q1_4_2_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Variabel Teks', questionText: 'Untuk menyimpan nama "Budi" dalam variabel `namaPemain`, perintahnya adalah...', options: ['atur namaPemain menjadi Budi', 'atur namaPemain menjadi "Budi"', 'atur "Budi" menjadi namaPemain', 'namaPemain = BudiText'], correctAnswer: 'atur namaPemain menjadi "Budi"', explanation: 'Nilai teks (string) biasanya diapit tanda kutip.' },
                            { questionId: 'q1_4_2_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Urutan Assignment', codeStimulus: "ATUR X = 5\nATUR Y = X\nATUR X = 10\nBICARA Y", questionText: 'Apa nilai Y yang ditampilkan?', correctAnswer: '5', explanation: 'Y mendapatkan nilai X saat itu (yaitu 5). Perubahan X setelahnya tidak mempengaruhi Y.' },
                            { questionId: 'q1_4_2_fill2', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Variabel Boolean', questionText: 'Variabel yang menyimpan nilai BENAR atau SALAH disebut variabel ____.', correctAnswer: 'boolean', placeholder: 'tipe variabel', explanation: 'Boolean adalah tipe data yang hanya memiliki dua nilai: benar (true) atau salah (false).' }
                        ]
                    },
                    {
                        id: 's1_4_3',
                        stageName: 'Variabel Angka untuk Skor',
                        status: 'locked',
                        prerequisiteStageId: 's1_4_2',
                        icon: 'counter',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Penggunaan Variabel dalam Game (Skor)',
                        questions: [
                            {
                                questionId: 'q1_4_3_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Mengubah Variabel Skor', questionText: 'Jika pemain mendapat poin, perintah yang digunakan adalah "ubah SKOR sebesar ____".', correctAnswer: '1', // Atau angka poinnya
                                placeholder: 'angka', explanation: 'Kita bisa menambah atau mengurangi nilai variabel numerik.'
                            },
                            { questionId: 'q1_4_3_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Inisialisasi Skor', questionText: 'Saat game dimulai, nilai awal variabel SKOR sebaiknya diatur menjadi...', options: ['100', '0', '-10', 'Tidak perlu diatur'], correctAnswer: '0', explanation: 'Skor biasanya dimulai dari nol.' },
                            { questionId: 'q1_4_3_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Menampilkan Skor', codeStimulus: "ATUR SKOR = 50\nBICARA \"Skor kamu: \" + SKOR", questionText: 'Apa yang ditampilkan?', correctAnswer: 'Skor kamu: 50', explanation: 'Variabel bisa digabungkan dengan teks untuk ditampilkan.' },
                            { questionId: 'q1_4_3_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Kondisi dengan Skor', questionText: 'Blok "JIKA SKOR > 100 MAKA MENANG" menggunakan variabel SKOR untuk...', options: ['Menyimpan nama pemain', 'Mengulang permainan', 'Membuat keputusan dalam game', 'Mengatur suara'], correctAnswer: 'Membuat keputusan dalam game', explanation: 'Nilai variabel sering digunakan sebagai syarat dalam blok kondisi.' },
                            { questionId: 'q1_4_3_fill2', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Variabel Nyawa', questionText: 'Selain skor, variabel lain yang sering ada di game untuk melacak sisa kesempatan pemain adalah ____.', correctAnswer: 'nyawa', placeholder: 'nama variabel', explanation: 'Variabel seperti "nyawa" atau "lives" umum digunakan dalam game.' }
                        ]
                    },
                    { // UJIAN CHAPTER 4
                        id: 's1_4_4',
                        stageName: 'Ujian Penjaga Harta Karun Variabel',
                        status: 'locked',
                        prerequisiteStageId: 's1_4_3',
                        icon: 'flag-checkered',
                        totalSoal: 5,
                        isCheckpoint: true,
                        konsep_kunci_coding_stage: 'Review Konsep Variabel',
                        questions: [
                            { questionId: 'q_uji4_1_guess', questionType: 'guess-output', konsep_kunci_coding: 'Operasi Variabel', codeStimulus: "ATUR X = 5\nATUR Y = X + 2\nBICARA Y", questionText: 'Apa yang akan ditampilkan?', correctAnswer: '7', explanation: 'Y akan bernilai X (yaitu 5) ditambah 2, menjadi 7.' },
                            { questionId: 'q_uji4_2_mc', questionType: 'multiple-choice', konsep_kunci_coding: 'Tipe Data', questionText: 'Variabel yang menyimpan "Selamat Pagi!" adalah tipe data...', options: ['Angka (Number)', 'Teks (String)', 'Boolean', 'Array'], correctAnswer: 'Teks (String)', explanation: 'Kumpulan karakter seperti "Selamat Pagi!" adalah data string.' },
                            { questionId: 'q_uji4_3_fill', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Scope Variabel (Dasar)', questionText: 'Variabel yang dibuat di awal program biasanya bisa diakses dari ____ bagian program.', correctAnswer: 'semua', placeholder: 'kata', explanation: 'Ini mengacu pada variabel global, meskipun konsep scope bisa lebih dalam.' },
                            { questionId: 'q_uji4_4_mc', questionType: 'multiple-choice', konsep_kunci_coding: 'Debugging Variabel', questionText: 'Jika program tidak berjalan sesuai harapan karena nilai variabel salah, langkah pertama adalah...', options: ['Menambah RAM komputer', 'Memeriksa dan melacak nilai variabel (misalnya dengan menampilkannya)', 'Mengganti semua nama variabel', 'Menghapus semua variabel'], correctAnswer: 'Memeriksa dan melacak nilai variabel (misalnya dengan menampilkannya)', explanation: 'Debugging sering melibatkan pemeriksaan nilai variabel pada berbagai tahap.' },
                            { questionId: 'q_uji4_5_seq', questionType: 'sequence', konsep_kunci_coding: 'Logika Tukar Nilai Variabel', questionText: 'Susun perintah untuk menukar isi variabel A dan B menggunakan variabel bantu TEMP: (1) TEMP = A, (2) A = B, (3) B = TEMP', options: ['TEMP = A', 'A = B', 'B = TEMP'], correctSequence: ['TEMP = A', 'A = B', 'B = TEMP'], explanation: 'Ini adalah algoritma standar untuk menukar dua nilai variabel.' }
                        ]
                    }
                ]
            },
            // CHAPTER 5: Kekuatan Fungsi dan Event
            {
                id: 'ch1_5',
                chapterName: '✨ Kekuatan Fungsi & Event',
                chapterDescription: 'Kelompokkan perintah dan buat programmu merespon aksi!',
                icon: 'flash-alert-outline',
                stages: [
                    {
                        id: 's1_5_1',
                        stageName: 'Mantra Baru: Membuat Fungsi Sendiri',
                        status: 'locked',
                        prerequisiteStageId: 's1_4_4',
                        icon: 'creation',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Pengenalan Fungsi (Prosedur)',
                        questions: [
                            { questionId: 'q1_5_1_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Manfaat Fungsi', questionText: 'Apa manfaat utama membuat fungsi dalam kode?', options: ['Membuat kode lebih panjang', 'Mengelompokkan perintah agar rapi & bisa dipakai ulang', 'Membuat program berjalan lebih lambat', 'Hanya untuk coder ahli'], correctAnswer: 'Mengelompokkan perintah agar rapi & bisa dipakai ulang', explanation: 'Fungsi membantu mengorganisir kode menjadi blok yang bisa digunakan berulang kali, membuat kode lebih mudah dibaca dan dikelola.' },
                            { questionId: 'q1_5_1_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Definisi Fungsi', questionText: 'Fungsi adalah sekumpulan ____ yang diberi nama dan bisa dipanggil berulang kali.', correctAnswer: 'perintah', placeholder: 'kata benda', explanation: 'Fungsi membungkus satu atau lebih perintah menjadi satu unit logis.' },
                            { questionId: 'q1_5_1_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Nama Fungsi', questionText: 'Bagaimana sebaiknya memberi nama fungsi?', options: ['Dengan angka saja', 'Nama yang singkat tapi tidak jelas', 'Nama yang deskriptif sesuai tugasnya (misal: LompatKarakter)', 'Tidak perlu diberi nama'], correctAnswer: 'Nama yang deskriptif sesuai tugasnya (misal: LompatKarakter)', explanation: 'Nama fungsi yang baik menjelaskan apa yang dilakukan fungsi tersebut.' },
                            { questionId: 'q1_5_1_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Blok Fungsi (Pseudo)', codeStimulus: "DEFINISIKAN FUNGSI SAPA:\n  BICARA \"Halo!\"", questionText: 'Apa yang terjadi setelah blok ini didefinisikan (sebelum dipanggil)?', correctAnswer: 'Tidak terjadi apa-apa (fungsi hanya didefinisikan)', explanation: 'Mendefinisikan fungsi tidak langsung menjalankannya. Fungsi perlu dipanggil.' },
                            { questionId: 'q1_5_1_mc3', questionType: 'multiple-choice', konsep_kunci_coding: 'Parameter Fungsi (Dasar)', questionText: 'Informasi yang bisa diberikan ke dalam fungsi saat dipanggil disebut...', options: ['Variabel global', 'Event', 'Parameter atau Argumen', 'Loop'], correctAnswer: 'Parameter atau Argumen', explanation: 'Parameter memungkinkan fungsi menerima input untuk diproses.' }
                        ]
                    },
                    {
                        id: 's1_5_2',
                        stageName: 'Memanggil Mantra (Fungsi)',
                        status: 'locked',
                        prerequisiteStageId: 's1_5_1',
                        icon: 'play-box-outline',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Memanggil Fungsi',
                        questions: [
                            { questionId: 'q1_5_2_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Cara Memanggil Fungsi', questionText: 'Bagaimana cara menjalankan perintah di dalam sebuah fungsi bernama "LOMPAT_TINGGI"?', options: ['Tulis ulang semua perintahnya', 'Panggil nama fungsinya: LOMPAT_TINGGI', 'Hapus fungsinya', 'Tidak bisa dijalankan'], correctAnswer: 'Panggil nama fungsinya: LOMPAT_TINGGI', explanation: 'Fungsi dijalankan dengan memanggil namanya.' },
                            { questionId: 'q1_5_2_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Blok Panggil Fungsi', questionText: 'Untuk menggunakan fungsi yang sudah dibuat, kita menggunakan blok "____ LOMPAT_TINGGI".', correctAnswer: 'panggil', placeholder: 'kata kerja', explanation: 'Blok "panggil" atau "call" digunakan untuk mengeksekusi sebuah fungsi.' },
                            { questionId: 'q1_5_2_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Output dari Pemanggilan Fungsi', codeStimulus: "DEFINISIKAN FUNGSI TAMBAH_DUA (ANGKA):\n  KEMBALIKAN ANGKA + 2\nAKHIR FUNGSI\n\nHASIL = PANGGIL TAMBAH_DUA (5)\nBICARA HASIL", questionText: 'Apa yang akan ditampilkan?', correctAnswer: '7', explanation: 'Fungsi TAMBAH_DUA dipanggil dengan input 5, mengembalikan 7, yang lalu ditampilkan.' },
                            { questionId: 'q1_5_2_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Fungsi Tanpa Parameter', questionText: 'Bisakah sebuah fungsi dibuat tanpa parameter?', options: ['Tidak bisa, selalu butuh parameter', 'Bisa, jika fungsi tidak butuh input spesifik', 'Hanya jika fungsinya pendek', 'Hanya di bahasa coding tertentu'], correctAnswer: 'Bisa, jika fungsi tidak butuh input spesifik', explanation: 'Fungsi bisa dibuat untuk melakukan tugas tetap tanpa memerlukan input eksternal.' },
                            { questionId: 'q1_5_2_mc3', questionType: 'multiple-choice', konsep_kunci_coding: 'Reusability Fungsi', questionText: 'Jika fungsi "GAMBAR_LINGKARAN" sudah dibuat, apa keuntungannya?', options: ['Program jadi lebih besar filenya', 'Hanya bisa dipakai sekali', 'Bisa dipanggil berkali-kali untuk menggambar banyak lingkaran', 'Membuat bingung'], correctAnswer: 'Bisa dipanggil berkali-kali untuk menggambar banyak lingkaran', explanation: 'Fungsi meningkatkan reusability kode.' }
                        ]
                    },
                    {
                        id: 's1_5_3',
                        stageName: 'Bereaksi Terhadap Klik (Event)',
                        status: 'locked',
                        prerequisiteStageId: 's1_5_2',
                        icon: 'cursor-default-click-outline',
                        totalSoal: 5,
                        konsep_kunci_coding_stage: 'Pengenalan Event Handling (Klik)',
                        questions: [
                            { questionId: 'q1_5_3_mc1', questionType: 'multiple-choice', konsep_kunci_coding: 'Definisi Event', questionText: 'Apa itu "event" dalam pemrograman?', options: ['Sebuah variabel', 'Sebuah kesalahan kode', 'Sebuah kejadian atau aksi (seperti klik mouse)', 'Sebuah perulangan'], correctAnswer: 'Sebuah kejadian atau aksi (seperti klik mouse)', explanation: 'Event adalah kejadian yang bisa dideteksi oleh program, seperti klik mouse, penekanan tombol, atau sensor terpicu.' },
                            { questionId: 'q1_5_3_fill1', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Event Handler', questionText: 'Blok kode yang dijalankan ketika sebuah event terjadi disebut event ____.', correctAnswer: 'handler', placeholder: 'istilah', explanation: 'Event handler adalah fungsi atau blok kode yang merespon suatu event.' },
                            { questionId: 'q1_5_3_mc2', questionType: 'multiple-choice', konsep_kunci_coding: 'Contoh Event', questionText: 'Manakah yang BUKAN contoh event?', options: ['Ketika tombol spasi ditekan', 'Ketika sprite diklik', 'Ketika program dimulai', 'Variabel Skor = 10'], correctAnswer: 'Variabel Skor = 10', explanation: '"Variabel Skor = 10" adalah sebuah statement atau kondisi, bukan event pemicu.' },
                            { questionId: 'q1_5_3_guess1', questionType: 'guess-output', konsep_kunci_coding: 'Event Klik dan Aksi', codeStimulus: "KETIKA KARAKTER INI DIKLIK:\n  BICARA \"Aduh!\"", questionText: 'Apa yang terjadi jika pengguna mengklik karakter tersebut?', correctAnswer: 'Karakter bicara "Aduh!"', explanation: 'Klik pada karakter memicu event handler yang membuatnya bicara.' },
                            { questionId: 'q1_5_3_mc3', questionType: 'multiple-choice', konsep_kunci_coding: 'Interaktivitas', questionText: 'Penggunaan event membuat program menjadi lebih...', options: ['Cepat selesai', 'Sulit dibuat', 'Interaktif', 'Statis'], correctAnswer: 'Interaktif', explanation: 'Event memungkinkan program merespon input atau aksi dari pengguna, membuatnya interaktif.' }
                        ]
                    },
                    { // UJIAN CHAPTER 5
                        id: 's1_5_4',
                        stageName: 'Ujian Master Reaksi Cepat',
                        status: 'locked',
                        prerequisiteStageId: 's1_5_3',
                        icon: 'flag-checkered',
                        totalSoal: 5,
                        isCheckpoint: true,
                        konsep_kunci_coding_stage: 'Review Konsep Fungsi dan Event',
                        questions: [
                            { questionId: 'q_uji5_1_mc', questionType: 'multiple-choice', konsep_kunci_coding: 'Kapan Event Digunakan', questionText: 'Kapan kita paling membutuhkan blok event?', options: ['Saat ingin program berhenti', 'Saat ingin program merespon aksi pengguna atau kejadian tertentu', 'Saat ingin menyimpan skor', 'Saat ingin mengulang perintah'], correctAnswer: 'Saat ingin program merespon aksi pengguna atau kejadian tertentu', explanation: 'Event handling membuat program menjadi interaktif.' },
                            { questionId: 'q_uji5_2_fill', questionType: 'fill-in-the-blank', konsep_kunci_coding: 'Fungsi vs Event', questionText: 'Fungsi ____ perintah, sedangkan Event ____ terjadinya sesuatu.', correctAnswer: 'mengelompokkan; mendeteksi', placeholder: 'kata kerja; kata kerja', explanation: 'Fungsi adalah tentang organisasi kode, event tentang pemicu aksi.' },
                            { questionId: 'q_uji5_3_guess', questionType: 'guess-output', konsep_kunci_coding: 'Event dan Fungsi', codeStimulus: "DEFINISIKAN FUNGSI MELOMPAT:\n  GERAK KE ATAS 50\nAKHIR FUNGSI\n\nKETIKA TOMBOL ATAS DITEKAN:\n  PANGGIL MELOMPAT", questionText: 'Apa yang terjadi saat tombol atas ditekan?', correctAnswer: 'Karakter bergerak ke atas 50', explanation: 'Event menekan tombol atas memanggil fungsi MELOMPAT.' },
                            { questionId: 'q_uji5_4_mc', questionType: 'multiple-choice', konsep_kunci_coding: 'Parameter dalam Event Handler (Lanjutan)', questionText: 'Bisakah fungsi yang dipanggil oleh event (event handler) memiliki parameter?', options: ['Tidak, event handler tidak bisa pakai parameter', 'Bisa, jika eventnya memberikan informasi (misal posisi mouse)', 'Hanya untuk event keyboard', 'Hanya jika fungsinya sangat pendek'], correctAnswer: 'Bisa, jika eventnya memberikan informasi (misal posisi mouse)', explanation: 'Beberapa event bisa memberikan data tambahan ke fungsi handler-nya.' },
                            { questionId: 'q_uji5_5_seq', questionType: 'sequence', konsep_kunci_coding: 'Logika Event Sederhana', questionText: 'Susun blok agar lampu menyala saat tombol "ON" diklik: (1) KETIKA TOMBOL_ON DIKLIK, (2) ATUR WARNA LAMPU MENJADI KUNING, (3) NYALAKAN LAMPU.', options: ['KETIKA TOMBOL_ON DIKLIK', 'ATUR WARNA LAMPU MENJADI KUNING', 'NYALAKAN LAMPU'], correctSequence: ['KETIKA TOMBOL_ON DIKLIK', 'ATUR WARNA LAMPU MENJADI KUNING', 'NYALAKAN LAMPU'], explanation: 'Event klik memicu serangkaian aksi untuk menyalakan lampu.' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        materialName: '🧙‍♂️ Petualangan Kode: Dunia Sihir Blok',
        materialDescription: 'Pelajari kekuatan sihir di balik setiap baris kode!',
        icon: 'school-outline',
        backgroundColor: '#81C784',
        chapters: [
            {
                id: 'ch1_1',
                chapterName: '🧙‍♂️ Awal Petualangan Sihir',
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
                                questionId: 'q1_1_2_seq1',
                                questionType: 'sequence',
                                konsep_kunci_coding: 'Logika Urutan',
                                questionText: 'Susunlah blok berikut agar Ksatria mengambil pedang: (1) Maju 2 langkah, (2) Belok Kanan, (3) Ambil Pedang.',
                                correctSequence: ['Maju 2 langkah', 'Belok Kanan', 'Ambil Pedang'],
                                options: ['Ambil Pedang', 'Belok Kanan', 'Maju 2 langkah'],
                                explanation: 'Ksatria harus maju dulu, lalu belok, baru bisa mengambil pedang.'
                            },
                            {
                                questionId: 'q1_1_2_mc1',
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
                                questionId: 'q1_1_2_mc2',
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
                id: 'ch1_2',
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