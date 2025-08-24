// products.js - ملف بيانات المنتجات المحدث مع نظام الفترات والأسعار
const productsData = {
  "products": [
    // ===== قسم الترفيه - Netflix =====
    {
      "id": 1,
      "title": "Netflix Premium",
      "description": "استمتع بأفضل المحتوى العالمي والعربي بجودة عالية",
      "image": "img/photo_6032680982466904825_y.jpg",
      "category": "entertainment",
      "subcategory": "netflix",
      "pricing": {
        "1month": {
          "price": "12",
          "originalPrice": "20",
          "duration": "شهر واحد"
        },
        "3months": {
          "price": "32",
          "originalPrice": "55",
          "duration": "3 أشهر"
        },
        "6months": {
          "price": "58",
          "originalPrice": "105",
          "duration": "6 أشهر"
        },
        "1year": {
          "price": "98",
          "originalPrice": "200",
          "duration": "سنة كاملة"
        }
      },
      "features": [
        "حسابات مضمونة 100%",
        "جودة 4K Ultra HD",
        "مشاهدة على 4 أجهزة",
        "محتوى حصري ومتجدد",
        "دعم فني مجاني"
      ],
      "reviews": [
        {
          "author": "أحمد محمد",
          "rating": 5,
          "comment": "خدمة ممتازة والحساب يشتغل بشكل مثالي! جودة عالية وسرعة في التفعيل. أنصح بشدة 👍"
        },
        {
          "author": "سارة علي",
          "rating": 5,
          "comment": "أفضل موقع للاشتراكات! الحساب شغال من أكثر من 6 شهور بدون أي مشاكل. خدمة عملاء رائعة 🌟"
        }
      ]
    },
    
    // ===== قسم الترفيه - Spotify =====
    {
      "id": 2,
      "title": "Spotify Premium",
      "description": "موسيقى بلا حدود وبدون إعلانات",
      "image": "img/photo_6032680982466904825_y.jpg",
      "category": "entertainment",
      "subcategory": "spotify",
      "pricing": {
        "1month": {
          "price": "8",
          "originalPrice": "15",
          "duration": "شهر واحد"
        },
        "3months": {
          "price": "22",
          "originalPrice": "40",
          "duration": "3 أشهر"
        },
        "6months": {
          "price": "40",
          "originalPrice": "75",
          "duration": "6 أشهر"
        },
        "1year": {
          "price": "72",
          "originalPrice": "140",
          "duration": "سنة كاملة"
        }
      },
      "features": [
        "موسيقى بدون إعلانات",
        "تحميل للاستماع بدون انترنت",
        "جودة صوت عالية",
        "قوائم تشغيل لا محدودة",
        "تخطي الأغاني بلا حدود"
      ],
      "reviews": [
        {
          "author": "لينا خالد",
          "rating": 5,
          "comment": "أحب سبوتيفاي! الحساب يشتغل بشكل ممتاز والموسيقى بجودة عالية. تسليم سريع جداً ⚡"
        }
      ]
    },

    // ===== قسم الترفيه - شاهد VIP =====
    {
      "id": 3,
      "title": "شاهد VIP",
      "description": "أفضل المسلسلات والأفلام العربية والعالمية",
      "image": "img/photo_6032680982466904825_y.jpg",
      "category": "entertainment",
      "subcategory": "shahid",
      "pricing": {
        "1month": {
          "price": "6",
          "originalPrice": "12",
          "duration": "شهر واحد"
        },
        "3months": {
          "price": "16",
          "originalPrice": "32",
          "duration": "3 أشهر"
        },
        "6months": {
          "price": "28",
          "originalPrice": "60",
          "duration": "6 أشهر"
        },
        "1year": {
          "price": "48",
          "originalPrice": "110",
          "duration": "سنة كاملة"
        }
      },
      "features": [
        "مشاهدة بدون إعلانات",
        "محتوى حصري وأصلي",
        "جودة HD و 4K",
        "تحميل للمشاهدة لاحقاً",
        "مشاهدة على جميع الأجهزة"
      ],
      "reviews": [
        {
          "author": "نورا السالم",
          "rating": 5,
          "comment": "المحتوى العربي رائع! مسلسلات وأفلام بجودة ممتازة. الحساب يعمل بشكل مثالي"
        }
      ]
    },

    // ===== قسم الألعاب - PlayStation Plus =====
    {
      "id": 8,
      "title": "PlayStation Plus Premium",
      "description": "اشتراك بلايستيشن بلس بريميوم مع مكتبة ألعاب ضخمة",
      "image": "img/photo_6032680982466904825_y.jpg",
      "category": "gaming",
      "subcategory": "playstation",
      "pricing": {
        "1month": {
          "price": "25",
          "originalPrice": "45",
          "duration": "شهر واحد"
        },
        "3months": {
          "price": "68",
          "originalPrice": "120",
          "duration": "3 أشهر"
        },
        "6months": {
          "price": "125",
          "originalPrice": "220",
          "duration": "6 أشهر"
        },
        "1year": {
          "price": "220",
          "originalPrice": "400",
          "duration": "سنة كاملة"
        }
      },
      "features": [
        "مكتبة ألعاب ضخمة",
        "ألعاب PS5 و PS4 حصرية",
        "ألعاب كلاسيكية من PS1 و PS2",
        "لعب أونلاين مع الأصدقاء",
        "خصومات حصرية على الألعاب"
      ],
      "reviews": [
        {
          "author": "عبدالرحمن القحطاني",
          "rating": 5,
          "comment": "مكتبة ألعاب لا تصدق! ألعاب بقيمة آلاف الريالات مقابل اشتراك شهري. رائع للغاية 🎮"
        }
      ]
    },

    // ===== قسم الذكاء الاصطناعي - ChatGPT =====
    {
      "id": 11,
      "title": "ChatGPT Plus",
      "description": "الذكاء الاصطناعي المتقدم لجميع احتياجاتك",
      "image": "img/photo_6032680982466904825_y.jpg",
      "category": "ai",
      "subcategory": "chatgpt",
      "pricing": {
        "1month": {
          "price": "18",
          "originalPrice": "30",
          "duration": "شهر واحد"
        },
        "3months": {
          "price": "48",
          "originalPrice": "85",
          "duration": "3 أشهر"
        },
        "6months": {
          "price": "85",
          "originalPrice": "160",
          "duration": "6 أشهر"
        },
        "1year": {
          "price": "155",
          "originalPrice": "300",
          "duration": "سنة كاملة"
        }
      },
      "features": [
        "وصول سريع حتى في أوقات الذروة",
        "GPT-4 المتقدم",
        "إجابات أسرع",
        "ميزات حصرية",
        "أولوية في التحديثات"
      ],
      "reviews": [
        {
          "author": "د. عبدالله الشمري",
          "rating": 5,
          "comment": "أداة رائعة للعمل والدراسة! الحساب شغال بشكل مثالي وسرعة الاستجابة ممتازة 🚀"
        }
      ]
    },

    // ===== قسم الإنتاجية - Canva Pro =====
    {
      "id": 14,
      "title": "Canva Pro",
      "description": "أداة التصميم الأولى عالمياً مع ميزات احترافية",
      "image": "img/photo_6032680982466904825_y.jpg",
      "category": "productivity",
      "subcategory": "canva",
      "pricing": {
        "1month": {
          "price": "10",
          "originalPrice": "18",
          "duration": "شهر واحد"
        },
        "3months": {
          "price": "28",
          "originalPrice": "50",
          "duration": "3 أشهر"
        },
        "6months": {
          "price": "48",
          "originalPrice": "95",
          "duration": "6 أشهر"
        },
        "1year": {
          "price": "85",
          "originalPrice": "180",
          "duration": "سنة كاملة"
        }
      },
      "features": [
        "ملايين القوالب المميزة",
        "صور وأيقونات بريميوم",
        "إزالة خلفية الصور",
        "تصدير بجودة عالية",
        "مساحة تخزين 100 جيجا"
      ],
      "reviews": [
        {
          "author": "ريم الأحمدي",
          "rating": 5,
          "comment": "لا أستطيع العمل بدونه! قوالب رائعة وسهولة في التصميم. يوفر ساعات من العمل 💼"
        }
      ]
    }
  ]
};

// تصدير البيانات للاستخدام في الموقع
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}
