const questionsData = [
    {
        "question": "What is the main language spoken in Vietnam?",
        "answer": "Vietnamese",
        "difficulty": "easy"
    },
    {
        "question": "Name a popular Vietnamese dish",
        "answer": "There are a lot! Pho, bun cha, bun rieu, etc",
        "difficulty": "easy"
    },
    {
        "question": "What is the biggest religion in Vietnam?",
        "answer": "Buddhism",
        "difficulty": "medium"
    },
    {
        "question": "What is the most common Vietnamese last name?",
        "answer": "Nguyen",
        "difficulty": "easy"
    },
    {
        "question": "What is the most common vehicle used in Vietnam?",
        "answer": "Motorcycles/Motorbikes",
        "difficulty": "medium"
    },
    {
        "question": "Vietnam has the largest What in the world?",
        "answer": "Cave! Son Doong Cave in Vietnam is considered the largest cave in the world",
        "difficulty": "hard"
    },
    {
        "question": "What is the capital city of Vietnam?",
        "answer": "Hanoi",
        "difficulty": "easy"
    },
    {
        "question": "What is the primary color of the Vietnamese flag?",
        "answer": "red",
        "difficulty": "easy"
    },
    {
        "question": "What is the traditional clothing worn by Vietnamese people?",
        "answer": "Ao Dai",
        "difficulty": "easy"
    },
    {
        "question": "Which holiday is celebrated as the Vietnamese Lunar New Year?",
        "answer": "Tet Nguyen Dan",
        "difficulty": "easy"
    },
    {
        "question": "What is the Vietnamese word for a traditional Vietnamese conical hat?",
        "answer": "Non la",
        "difficulty": "medium"
    },
    {
        "question": "What type of theater combines singing, dancing, and acting and is popular in Vietnamese culture?",
        "answer": "Cai luong (reformed theater)",
        "difficulty": "easy"
    },
    {
        "question": "In Vietnamese cuisine, what is the main ingredient in 'Bun cha'?",
        "answer": "Grilled pork patties",
        "difficulty": "easy"
    },
    {
        "question": "Which Vietnamese ethnic group is known for their terraced rice fields and traditional stilt houses?",
        "answer": "Hmong",
        "difficulty": "medium"
    },
    {
        "question": "Which Vietnamese king is credited with building the historic citadel in Hue?",
        "answer": "Emperor Gia Long",
        "difficulty": "medium"
    },
    {
        "question": "Which Vietnamese festival celebrates the harvest season and features boat races?",
        "answer": "Tet Trung Thu (Mid-Autumn Festival)",
        "difficulty": "medium"
    },
    {
        "question": "In Vietnamese cuisine, what are 'nem'?",
        "answer": "Spring rolls or fried rolls",
        "difficulty": "easy"
    },
    {
        "question": "What is the traditional Vietnamese practice of giving gifts during Lunar New Year called?",
        "answer": "Li xi or lucky money",
        "difficulty": "medium"
    },
    {
        "question": "Which Vietnamese emperor is known for his reforms in the 19th century, including the abolition of the feudal system?",
        "answer": "Emperor Minh Mang",
        "difficulty": "hard"
    },
    {
        "question": "Which ancient Vietnamese city served as the capital during the Ly and Tran Dynasties and is known for its well-preserved citadel?",
        "answer": "Thang Long (Hanoi)",
        "difficulty": "hard"
    },
    {
        "question": "Which Vietnamese king is credited with constructing the Temple of Literature in Hanoi?",
        "answer": "Emperor Ly Thanh Tong",
        "difficulty": "medium"
    },
    {
        "question": "What is the traditional Vietnamese style of painting using natural materials like rice paper and ink?",
        "answer": "Tranh son dau (oil painting)",
        "difficulty": "medium"
    },
    {
        "question": "What is the significance of the water puppetry tradition in Vietnam?",
        "answer": "It depicts scenes of rural life and folklore",
        "difficulty": "medium"
    },
    {
        "question": "What is the Vietnamese martial art that incorporates both armed and unarmed techniques and is often performed with swords?",
        "answer": "Vo co truyen (traditional martial arts)",
        "difficulty": "hard"
    },
    {
        "question": "What is the Vietnamese term for the traditional art of silk painting using intricate patterns and designs?",
        "answer": "Tranh hoa sen (lotus silk painting)",
        "difficulty": "hard"
    },
    {
        "question": "Which Vietnamese holiday marks the end of the lunar year and is associated with cleaning and purification?",
        "answer": "Tet",
        "difficulty": "easy"
    },
    {
        "question": "Which Vietnamese mythological creature is a dragon with a lion's head and is often seen as a guardian of temples and pagodas?",
        "answer": "Rong",
        "difficulty": "medium"
    },
    {
        "question": "Which famous UNESCO World Heritage site is located in Vietnam and features thousands of limestone karsts and islets?",
        "answer": "Halong Bay",
        "difficulty": "easy"
    },
    {
        "question": "What is the traditional Vietnamese game that involves players taking turns hitting a shuttlecock over a net with their feet, knees, or head?",
        "answer": "Da Cau (foot shuttlecock)",
        "difficulty": "easy"
    },
    {
        "question": "What is the ancient Vietnamese script that uses Chinese characters, but with a phonetic Vietnamese twist?",
        "answer": "Chu Nom",
        "difficulty": "medium"
    },
    {
        "question": "Which Vietnamese festival marks the arrival of spring and is known for its colorful flower displays?",
        "answer": "Hue Festival",
        "difficulty": "medium"
    },
    {
        "question": "What is the traditional Vietnamese martial art that focuses on hand-to-hand combat?",
        "answer": "Vovinam",
        "difficulty": "medium"
    },
    {
        "question": "Which Vietnamese city is famous for its lantern festival during the Mid-Autumn Festival?",
        "answer": "Hoi An",
        "difficulty": "medium"
    },
    {
        "question": "What is a popular place in Hanoi for making ceramics?",
        "answer": "Bat Trang Village",
        "difficulty": "medium"
    },
    {
        "question": "Which Vietnamese city is known for its colorful and historic Old Quarter?",
        "answer": "Hanoi",
        "difficulty": "medium"
    },
    {
        "question": "What is the Vietnamese term for the kitchen god who watches over the household?",
        "answer": "Ong Tao",
        "difficulty": "medium"
    },
    {
        "question": "What is the traditional Vietnamese method of preserving and flavoring foods by fermenting them in salt and spices?",
        "answer": "Nuoc mam (fish sauce)",
        "difficulty": "medium"
    },
    {
        "question": "Which Vietnamese musical instrument is a monochord with a single string and a flexible bamboo handle?",
        "answer": "Dan Bau",
        "difficulty": "medium"
    },
    {
        "question": "Which Vietnamese city is famous for its silk production and silk products?",
        "answer": "Hue",
        "difficulty": "hard"
    },
    {
        "question": "What is the traditional Vietnamese art of hand-painting intricate designs on wooden objects called?",
        "answer": "Dong Ho painting",
        "difficulty": "hard"
    },
    {
        "question": "Which Vietnamese king is credited with establishing the first centralized Vietnamese state and adopting Chinese-style governance?",
        "answer": "Emperor Hung Vuong",
        "difficulty": "hard"
    },
    {
        "question": "In Vietnamese folklore, what is the name of the water buffalo often associated with rice cultivation and rural life?",
        "answer": "Nguu Lang",
        "difficulty": "hard"
    },
    {
        "question": "Which Vietnamese holiday marks the day of Buddha's birth, enlightenment, and death?",
        "answer": "Buddha's Birthday (Phat Dan)",
        "difficulty": "easy"
    },
    {
        "question": "What is the traditional Vietnamese sweet soup dessert often made with mung beans, coconut milk, and glutinous rice dumplings?",
        "answer": "Che",
        "difficulty": "easy"
    },
    {
        "question": "What is the traditional Vietnamese musical instrument similar to a bamboo flute?",
        "answer": "Sao",
        "difficulty": "easy"
    },
    {
        "question": "Which Vietnamese festival is celebrated to honor the Kitchen God and involves sending his spirit to heaven to report on the family's activities?",
        "answer": "Tet Ong Cong - Tet Ong Tao",
        "difficulty": "easy"
    },
    {
        "question": "What is the traditional Vietnamese practice of offering food to wandering spirits during Tet Han Thuc called?",
        "answer": "Banh troi, banh chay",
        "difficulty": "easy"
    },
    {
        "question": "Which Vietnamese city is famous for its imperial citadel and historic architecture?",
        "answer": "Hue",
        "difficulty": "easy"
    },
    {
        "question": "What is the traditional Vietnamese art of making figurines from glutinous rice dough called?",
        "answer": "Banh troi, banh chay",
        "difficulty": "easy"
    },
    {
        "question": "Which Vietnamese festival involves the release of colorful lanterns into the night sky on August 15th Lunar Calendar?",
        "answer": "Tet Trung Thu (Mid-Autumn Festival)",
        "difficulty": "easy"
    },
    {
        "question": "What is the traditional Vietnamese musical instrument resembling a two-stringed fiddle?",
        "answer": "Dan nhi",
        "difficulty": "hard"
    }
]

export default questionsData;