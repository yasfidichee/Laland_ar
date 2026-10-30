// ============================================================
// 1. بيانات الموسوعة (ضع بياناتك الحقيقية هنا)
// ============================================================
const encyclopediaData = [
    {
        term: "العقل",
        definition: "العقل (Raison) — بالمعنى العام: ملكة إدراك العلاقات، أو القدرة على التمييز بين الصواب والخطأ. وفي الاصطلاح الفلسفي، يطلق على مجموعة المبادئ الكلية الثابتة المنظمة لمعطيات التجربة الحسية. وقد ميز لالاند بين معان متعددة للعقل: منها الإبستيمولوجي (المبادئ القبلية)، والميتافيزيقي (القول بأن العالم معقول)، والأنثروبولوجي (الخاصية المميزة للإنسان عن سائر الكائنات)."
    },
    {
        term: "الوجود",
        definition: "الوجود (Existence) — مفهوم يشير إلى الكينونة أو الحضور الفعلي للأشياء في العالم. وقد اختلفت المدارس الفلسفية في تحديد علاقة الوجود بالماهية: فمنهم من قدم الماهية على الوجود (كما عند أفلاطون)، ومنهم من قدم الوجود على الماهية (كما عند الوجوديين). ويشير لالاند إلى أن لفظ الوجود قد يستعمل بمعنى الوجود الواقعي (الوجود بالفعل) أو الوجود المنطقي (الوجود في الذهن)."
    },
    {
        term: "الحرية",
        definition: "الحرية (Liberté) — حالة الكائن الذي يستطيع أن يقرر بنفسه ما يفعله، دون أن يكون خاضعاً لقهر خارجي أو حتمية داخلية. وفي الفلسفة، تطرح الحرية في مقابل الحتمية: فإذا كان كل شيء في العالم محكوماً بقوانين ضرورية، فكيف يمكن للإنسان أن يكون حراً؟ وقد أجاب لالاند عن هذا الإشكال بالتمييز بين الحرية النفسية (القدرة على الاختيار دون إكراه) والحرية الأخلاقية (القدرة على الانقياد للقانون الأخلاقي)."
    },
    {
        term: "المعقولية",
        definition: "المعقولية (Rationalité) — صفة وميزة كل ما هو عقلي. يقال \"معقولية مبادئ\"، ويستشف منها أن مصدرها ليس أحداثاً تاريخية عارضة، وإنما يكون مصدرها ترابطاً ضرورياً يبررها ويربطها. وقد أعطى لالاند مصطلح \"عقلي وعقلاني\" (rationnel) أربعة معان: الأول ما يتطابق مع العقل (عند هيجل)، والثاني ما هو منطقي ومطابق للمنهج القويم (عند أوغست كونت)، والثالث ما يتعلق بالعدد العقلي (العدد الذي يمكن وضعه في صورة كسر بين عددين صحيحين)، والرابع ما يتعلق بالآلية العقلانية في تنظيم العمل."
    },
    {
        term: "الاستدلال",
        definition: "الاستدلال (Raisonnement) — عملية إجرائية عقلية يمكن بها استنتاج نتيجة من مقدمة أو عدة مقدمات تتضمن الحقيقة. وقد استعان لالاند بتحديد أرسطو في \"التحليلات الأولى\". ويقسم الاستدلال إلى: الاستنتاج (الانتقال من العام إلى الخاص، وهو صارم وواجب)، والاستقراء (الانتقال من الخاص إلى العام، وهو ناقص ومحتمل)، والتمثيل (الانتقال من خاص إلى خاص)."
    },
    {
        term: "المذهب الحيوي",
        definition: "المذهب الحيوي (Vitalisme) — مذهب مدرسة مونبلييه، مذهب يرى أن في كل كائن فرد \"مبدأ حيوياً\" مميزاً، يختلف عن القوى الفيزيائية والكيميائية. وقد ذكره لالاند في موسوعته ضمن المواد المرتبطة بفلسفة الحياة."
    },
    {
        term: "البرهان",
        definition: "البرهان (Démonstration) — كل برهان هو استدلال يرمي إلى تبيان حقيقة استنتاجه، استناداً إلى مقدمات مثبوتة أو مسلّم بها كحقائق. والبرهان في المنطق الأرسطي هو القياس اليقيني المكوّن من مقدمات صادقة وضرورية."
    },
    {
        term: "الاستقراء",
        definition: "الاستقراء (Induction) — نوع من الاستدلال ينتقل فيه العقل من الوقائع الجزئية إلى القوانين الكلية، أو من الأكثر اختصاصاً إلى الأقل اختصاصاً. وهو على عكس الاستنتاج، لا يعطي يقيناً مطلقاً بل يعطي احتمالاً. وقد اعتبره لالاند صورة من صور الاستدلال الناقص."
    }
];

// ============================================================
// 2. تهيئة Fuse.js
// ============================================================
const fuseOptions = {
    keys: [
        { name: "term", weight: 0.7 },
        { name: "definition", weight: 0.3 }
    ],
    threshold: 0.4,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
    ignoreLocation: true,
    useExtendedSearch: false
};

const fuse = new Fuse(encyclopediaData, fuseOptions);

// ============================================================
// 3. عناصر DOM
// ============================================================
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const resultCount = document.getElementById('resultCount');

// ============================================================
// 4. دالة العرض
// ============================================================
function renderResults(results, query) {
    resultsContainer.innerHTML = '';

    if (!query || query.trim() === '') {
        resultCount.textContent = '';
        resultsContainer.innerHTML = `
            <div class="empty-state">
                اكتب كلمة في صندوق البحث أعلاه لعرض النتائج
            </div>
        `;
        return;
    }

    if (results.length === 0) {
        resultCount.textContent = '';
        resultsContainer.innerHTML = `
            <div class="empty-state">
                😕 لا توجد نتائج مطابقة لـ «${escapeHtml(query)}»
            </div>
        `;
        return;
    }

    resultCount.textContent = `تم العثور على ${results.length} نتيجة`;

    results.forEach(({ item, matches }) => {
        const card = document.createElement('div');
        card.className = 'result-card';

        const termHtml = highlightMatches(
            item.term,
            matches ? matches.find(m => m.key === 'term') : null
        );

        let definitionHtml = item.definition;
        const defMatch = matches ? matches.find(m => m.key === 'definition') : null;
        
        if (defMatch) {
            const indices = defMatch.indices[0];
            const start = Math.max(0, indices[0] - 60);
            const end = Math.min(item.definition.length, indices[1] + 120);
            let snippet = item.definition.substring(start, end);
            
            if (start > 0) snippet = '…' + snippet;
            if (end < item.definition.length) snippet = snippet + '…';

            const relativeIndices = indices.map(([s, e]) => [
                Math.max(0, s - start),
                Math.min(snippet.length, e - start)
            ]);
            
            definitionHtml = highlightPlainText(
                snippet,
                relativeIndices
            );
        } else {
            if (definitionHtml.length > 200) {
                definitionHtml = definitionHtml.substring(0, 200) + '…';
            }
        }

        card.innerHTML = `
            <h3>${termHtml}</h3>
            <div class="definition">${definitionHtml}</div>
        `;
        resultsContainer.appendChild(card);
    });
}

// ============================================================
// 5. دوال مساعدة للتمييز
// ============================================================
function highlightMatches(text, match) {
    if (!match || !match.indices || match.indices.length === 0) {
        return escapeHtml(text);
    }
    return highlightPlainText(text, match.indices);
}

function highlightPlainText(text, indices) {
    if (!indices || indices.length === 0) return escapeHtml(text);

    const sorted = [...indices].sort((a, b) => a[0] - b[0]);
    let result = '';
    let lastEnd = 0;

    sorted.forEach(([start, end]) => {
        result += escapeHtml(text.substring(lastEnd, start));
        result += `<mark>${escapeHtml(text.substring(start, end + 1))}</mark>`;
        lastEnd = end + 1;
    });

    result += escapeHtml(text.substring(lastEnd));
    return result;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ============================================================
// 6. ربط الأحداث
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

renderResults([], '');
