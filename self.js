
const questions = [
    { question: "حرصي على الدقة والحقائق قد يجعلني في نظر الآخرين جاف المشاعر", quad: "A" },
    { question: "أعمل مع الآخرين عن طيب نفس من أجل هدف مشترك", quad: "C" },
    { question: "أدرك الأرقام وأعي دلالاتها ولي القدرة على حسابها وتطويعها لما أرغب", quad: "A" },
    { question: "لدي القدرة على توقع احتياجات الآخرين ومن ثم مراعاتها", quad: "C" },
    { question: "أدرك الكثير من الأشياء بالحدس والبديهة دون التفكير العميق فيها", quad: "D" },
    { question: "حذر وحريص وأهتم بالعواقب كثيراً", quad: "B" },
    { question: "أجمل اللحظات هي اللحظات التي أسعد فيها الآخرين", quad: "C" },
    { question: "أتحمس للأهداف وأكرس لها وقتي وجهدي كله", quad: "D" },
    { question: "أستطيع أن أحدد سبب المشكلة عند حدوثها وأحللها ثم أجد لها الحل المناسب", quad: "A" },
    { question: "لا يمكن أن أصبر على الفوضى بل أرتب وأنظم كل الأمور والأشياء الخاصة والعامة", quad: "B" },
    { question: "لدي القدرة على تنمية العلاقات مع الآخرين والمحافظة عليها والتواصل معها", quad: "C" },
    { question: "المال عندي للإنفاق ويصعب علي جمعه", quad: "D" },
    { question: "لست بخيلاً ولكنني لا أصرف شيئاً من مالي إلا بعد تحليل ودراسة متأنية", quad: "A" },
    { question: "أكره الروتين وأحب التغيير دائماً", quad: "D" },
    { question: "أحافظ على أغراضي وممتلكاتي بطريقة منظمة ومرتبة", quad: "B" },
    { question: "يقول بعض الناس عني (أنت مندفع ولا يمكن توقع أفعالك)", quad: "D" },
    { question: "أعتبر نفسي أسير بوضوح إلى هدفي الذي قررته", quad: "A" },
    { question: "أنفذ الأمور دائماً خطوة بخطوة وأتمتع بالدقة في عملي", quad: "B" },
    { question: "أعتبر أن علاقتي الطيبة مع الآخرين هي أعز ما أملك", quad: "C" },
    { question: "أميل للفعل أكثر من ميلي للتأمل والتفكير والتنظير", quad: "B" },
    { question: "مستعد للخدمة وتقديم نفسي للآخرين متى احتاجوا إلى ذلك", quad: "C" },
    { question: "أجد نفسي أفكر وأستنتج بعيداً عن العاطفة والمشاعر", quad: "A" },
    { question: "يعتمد علي الآخرون ويثقون في إنجازي وإخلاصي", quad: "B" },
    { question: "أحب التحدث مع الآخرين عن مشاعري وقصصي", quad: "C" },
    { question: "تستهويني الأفكار غير الاعتيادية والتي يسميها الآخرون أفكاراً مجنونة", quad: "D" },
    { question: "لدي قدرة عالية على تحليل الأحداث واستنتاج آثارها المنطقية", quad: "A" },
    { question: "لدي القدرة على مواصلة العمل حتى إنجازه", quad: "B" },
    { question: "أجيد بث الحماس في همم الآخرين", quad: "C" },
    { question: "أمتلك معرفة مميزة بالمواضيع العلمية والتقنية", quad: "A" },
    { question: "أعتبر نفسي عطوفاً ولطيفاً بالآخرين وأساعدهم متى احتاجوا", quad: "C" },
    { question: "أحب العمل في أكثر من شيء في وقت واحد", quad: "D" },
    { question: "أراقب وجوه الآخرين لا إرادياً عندما يتحدثون إلي", quad: "C" },
    { question: "كثيراً ما تراودني الأفكار الجديدة", quad: "D" },
    { question: "لا أحب أن يقطع أحد نمطي الروتين", quad: "B" },
    { question: "أشعر بارتياح أثناء أدائي لأعمال التصنيف والترتيب والتنظيم", quad: "B" },
    { question: "أهتم عادة بالصورة العامة ولا أدقق في التفاصيل", quad: "D" },
    { question: "أعتقد أن العمل أهم بكثير من المشاعر الإنسانية", quad: "A" },
    { question: "يفضل الآخرون أن أتولى زمام القيادة", quad: "A" },
    { question: "أدون التزاماتي الاجتماعية في مفكرتي الخاصة وأحرص على القيام بها", quad: "B" },
    { question: "أتمتع بروح الدعابة التي قد توقعني في مشاكل", quad: "D" },
    { question: "أميل في حكمي على الأشياء على حدسي وتوقعاتي أكثر من ميلي إلى التحليل", quad: "D" },
    { question: "أفضل تعليمات محددة على أن يترك الأمر بلا تعليمات محددة وواضحة", quad: "B" },
    { question: "يصفني الناس بأنني عاطفي", quad: "C" },
    { question: "يصفني الناس بأنني حريص (أو) حذر (أو) منضبط", quad: "B" },
    { question: "يصفني الناس بأنني مغامر", quad: "D" },
    { question: "يصفني الناس بأنني حازم (أو) عقلاني", quad: "A" },
    { question: "أحب معرفة التفاصيل وخطوات أي عمل سأقوم به", quad: "B" },
{ question: "لا أحب الأنظمة والقوانين وأشعر بأنها تقيدني", quad: "D" },
    { question: "أحب الشعر (أو) القصص (أو) التواصل مع الآخرين", quad: "C" },
    { question: "أشعر بأنه يجب أن تنفذ القوانين والعقوبات بحزم وبدون عاطفة أو مجاملات", quad: "A" },
    { question: "لا أحب الأشياء المحتملة أو التي لا يمكن توقع نتائجها (غير مضمونة)", quad: "A" },
    { question: "أحب مساعدة الآخرين وإعطائهم من وقتي ومالي وجهدي", quad: "C" },
    { question: "أحب التخطيط المفصل لأي عمل سأقوم به", quad: "B" },
    { question: "عند شرائي لجهاز جديد أحاول تشغيله بنفسي دون اللجوء إلى كتيب التشغيل", quad: "D" },
    { question: "أحب الاستماع لمشاكل الآخرين ومساعدتهم", quad: "C" },
    { question: "لدي القدرة في التعامل مع الأرقام (أو) الحسابات", quad: "A" }
];
let currentIdx = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };
function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const questionNum = document.getElementById("question-num");
    const progressBar = document.getElementById("progress-bar");

    if (currentIdx < questions.length) {
        questionText.innerText = questions[currentIdx].question;
        questionNum.innerText =` السؤال ${currentIdx + 1} من ${questions.length}`;
        const progress = ((currentIdx + 1) / questions.length) * 100;
        progressBar.style.width = progress + "%";
    }
}

function handleAnswer(choice) {
    if (choice === 'yes') {
        const quad = questions[currentIdx].quad;
        scores[quad]++;
    }

    currentIdx++;

    if (currentIdx < questions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    document.getElementById("quiz-box").style.display = "none";
    const resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
    resultBox.style.display = "block";

    const topQuad = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    const data = {
        A: { title: "الربع A (التحليلي)", desc: "أنت شخص عقلاني، تهتم بالحقائق والأرقام والمنطق." },
        B: { title: "الربع B (التنفيذي)", desc: "أنت شخص منظم، تحب التخطيط، الانضباط، والإجراءات الواضحة." },
        C: { title: "الربع C (العاطفي)", desc: "أنت شخص مشاعري، تهتم بالعلاقات الإنسانية والعمل الجماعي." },
        D: { title: "الربع D (الإبداعي)", desc: "أنت شخص ابتكاري، تحب الخيال والمغامرة والنظرة الشمولية." }
    };

    const resultQuad = document.getElementById("result-quad");
    const resultText = document.getElementById("result-text");

    resultQuad.innerText = data[topQuad].title;
    resultQuad.className =` final-quad bg-${topQuad}`;
    resultText.innerText = data[topQuad].desc;
}

window.onload = loadQuestion;