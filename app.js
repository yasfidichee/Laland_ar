// ============================================================
// 1. بيانات الموسوعة (التجريبية)
// ============================================================
const encyclopediaData = [
    { term: "العقل", definition: "العقل (Raison) — بالمعنى العام: ملكة إدراك العلاقات، أو القدرة على التمييز بين الصواب والخطأ. وفي الاصطلاح الفلسفي، يطلق على مجموعة المبادئ الكلية الثابتة المنظمة لمعطيات التجربة الحسية." },
    { term: "الوجود", definition: "الوجود (Existence) — مفهوم يشير إلى الكينونة أو الحضور الفعلي للأشياء في العالم. وقد اختلفت المدارس الفلسفية في تحديد علاقة الوجود بالماهية: فمنهم من قدم الماهية على الوجود، ومنهم من قدم الوجود على الماهية." },
    { term: "الحرية", definition: "الحرية (Liberté) — حالة الكائن الذي يستطيع أن يقرر بنفسه ما يفعله، دون أن يكون خاضعاً لقهر خارجي أو حتمية داخلية. وفي الفلسفة، تطرح الحرية في مقابل الحتمية." },
    { term: "المعقولية", definition: "المعقولية (Rationalité) — صفة وميزة كل ما هو عقلي. يقال معقولية مبادئ، ويستشف منها أن مصدرها ليس أحداثاً تاريخية عارضة، وإنما يكون مصدرها ترابطاً ضرورياً يبررها ويربطها." },
    { term: "الاستدلال", definition: "الاستدلال (Raisonnement) — عملية إجرائية عقلية يمكن بها استنتاج نتيجة من مقدمة أو عدة مقدمات تتضمن الحقيقة. ويقسم الاستدلال إلى: الاستنتاج، والاستقراء، والتمثيل." },
    { term: "المذهب الحيوي", definition: "المذهب الحيوي (Vitalisme) — مذهب مدرسة مونبلييه، مذهب يرى أن في كل كائن فرد مبدأ حيوياً مميزاً، يختلف عن القوى الفيزيائية والكيميائية." },
    { term: "البرهان", definition: "البرهان (Démonstration) — كل برهان هو استدلال يرمي إلى تبيان حقيقة استنتاجه، استناداً إلى مقدمات مثبوتة أو مسلّم بها كحقائق." },
    { term: "الاستقراء", definition: "الاستقراء (Induction) — نوع من الاستدلال ينتقل فيه العقل من الوقائع الجزئية إلى القوانين الكلية، أو من الأكثر اختصاصاً إلى الأقل اختصاصاً." }
];

// ============================================================
// 2. إعدادات Fuse.js
// ============================================================
const fuseOptions = {
    keys: ["term", "definition"],
    threshold: 0.4,
    includeMatches: true
};

const fuse = new Fuse(encyclopediaData, fuseOptions);

// ============================================================
// 3. ربط العناصر
// ============================================================
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const resultCount = document.getElementById('resultCount');

// ============================================================
// 4. دالة عرض النتائج (تم تبسيطها باش تخدم بلا مشاكل)
// ============================================================
function renderResults(results, query) {
    resultsContainer.innerHTML = '';

    if (!query) {
        resultCount.textContent = '';
        resultsContainer.innerHTML = `<div class="empty-state">اكتب كلمة في صندوق البحث أعلاه لعرض النتائج</div>`;
        return;
    }

    if (results.length === 0) {
        resultCount.textContent = '';
        resultsContainer.innerHTML = `<div class="empty-state">😕 لا توجد نتائج مطابقة لـ «${query}»</div>`;
        return;
    }

    resultCount.textContent = `تم العثور على ${results.length} نتيجة`;

    // عرض البطاقات
    results.forEach(result => {
        const item = result.item;
        
        const card = document.createElement('div');
        card.className = 'result-card';

        // نستعملو innerHTML مباشرة هنا باش نتفاداو أي مشكل فالدوال
        card.innerHTML = `
            <h3>${item.term}</h3>
            <div class="definition">${item.definition}</div>
        `;
        
        resultsContainer.appendChild(card);
    });
}

// ============================================================
// 5. البحث المباشر
// ============================================================
let debounceTimer;
searchInput.addEventListener('input', function(e) {
    clearTimeout(debounceTimer);
    const query = e.target.value;

    debounceTimer = setTimeout(() => {
        if (query.trim() === '') {
            renderResults([], '');
        } else {
            const results = fuse.search(query);
            renderResults(results, query);
        }
    }, 200);
});

// عرض الشاشة الأولى
renderResults([], '');
