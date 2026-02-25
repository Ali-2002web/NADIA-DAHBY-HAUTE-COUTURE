/* ============================================
   NADIA DAHBY - Product Catalog
   ============================================ */

const PRODUCTS = {
    caftan: [
        {
            id: 'caftan-traditionnel-royal',
            name: 'Caftan Traditionnel Royal',
            price: 15000,
            category: 'caftan',
            description: 'Un caftan d\'exception en soie brodée avec des fils d\'or, inspiré de l\'artisanat fassi séculaire. Chaque détail est réalisé à la main par nos maîtres artisans.',
            details: ['Tissu: Soie naturelle', 'Broderie: Fils d\'or et d\'argent', 'Doublure: Satin de soie', 'Finitions: Sfifa et Akaad artisanaux'],
            images: ['images/collection-caftan.jpg', 'images/tenue3.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'caftan-moderne-elegance',
            name: 'Caftan Moderne Élégance',
            price: 12000,
            category: 'caftan',
            description: 'Alliance parfaite entre tradition et modernité, ce caftan en crêpe de soie est sublimé par une broderie contemporaine aux motifs géométriques.',
            details: ['Tissu: Crêpe de soie', 'Broderie: Motifs géométriques modernes', 'Doublure: Satin', 'Finitions: Boutons en cristal'],
            images: ['images/kimonovert.jpg', 'images/collection-djellaba.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'caftan-beldi-prestige',
            name: 'Caftan Beldi Prestige',
            price: 18000,
            category: 'caftan',
            description: 'Pièce d\'exception en velours de soie, ornée de broderies Rbati traditionnelles. Un hommage au savoir-faire ancestral marocain.',
            details: ['Tissu: Velours de soie', 'Broderie: Rbati traditionnelle', 'Doublure: Soie naturelle', 'Finitions: Perles et cristaux Swarovski'],
            images: ['images/tenuex.jpg', 'images/collection-caftan.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'caftan-nuit-etoilee',
            name: 'Caftan Nuit Étoilée',
            price: 14000,
            category: 'caftan',
            description: 'Inspiré des nuits étoilées du Sahara, ce caftan en satin duchesse est parsemé de cristaux et de broderies dorées.',
            details: ['Tissu: Satin duchesse', 'Broderie: Fils dorés', 'Doublure: Satin', 'Finitions: Cristaux scintillants'],
            images: ['images/tenue3.jpg', 'images/couture.png'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'caftan-lumiere-doree',
            name: 'Caftan Lumière Dorée',
            price: 16000,
            category: 'caftan',
            description: 'Ce caftan lumineux en organza et dentelle capture l\'essence du luxe marocain avec ses finitions dorées et ses détails raffinés.',
            details: ['Tissu: Organza et dentelle', 'Broderie: Fils d\'or', 'Doublure: Satin de soie', 'Finitions: Sfifa dorée artisanale'],
            images: ['images/couture.png', 'images/kimonovert.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'caftan-splendeur-orientale',
            name: 'Caftan Splendeur Orientale',
            price: 13000,
            category: 'caftan',
            description: 'Un caftan somptueux en brocart de soie, rehaussé de broderies fassi et de perles nacrées pour une allure royale.',
            details: ['Tissu: Brocart de soie', 'Broderie: Fassi traditionnelle', 'Doublure: Crêpe', 'Finitions: Perles nacrées'],
            images: ['images/collection-kimono.jpg', 'images/tenuex.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'caftan-perle-du-maroc',
            name: 'Caftan Perle du Maroc',
            price: 11000,
            category: 'caftan',
            description: 'Élégance intemporelle en crêpe marocain avec une broderie délicate ton sur ton et des boutons en nacre véritable.',
            details: ['Tissu: Crêpe marocain', 'Broderie: Ton sur ton', 'Doublure: Satin', 'Finitions: Boutons en nacre'],
            images: ['images/collection-djellaba.jpg', 'images/collection-caftan-simple.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'caftan-harmonie-florale',
            name: 'Caftan Harmonie Florale',
            price: 9500,
            category: 'caftan',
            description: 'Un caftan délicat orné de motifs floraux brodés à la main, alliant fraîcheur et sophistication.',
            details: ['Tissu: Mousseline de soie', 'Broderie: Motifs floraux', 'Doublure: Satin léger', 'Finitions: Bordures en dentelle'],
            images: ['images/collection-caftan-simple.jpg', 'images/collection-kimono.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        }
    ],
    kimono: [
        {
            id: 'kimono-classique',
            name: 'Ensemble Kimono Classique',
            price: 6500,
            category: 'kimono',
            description: 'Un ensemble kimono élégant en crêpe de soie, alliant confort et raffinement avec une coupe fluide et des finitions soignées.',
            details: ['Tissu: Crêpe de soie', 'Coupe: Fluide et ample', 'Doublure: Viscose', 'Finitions: Ceinture assortie'],
            images: ['images/collection-kimono.jpg', 'images/kimonovert.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'kimono-eclat-du-sahara',
            name: 'Ensemble Kimono Éclat du Sahara',
            price: 7500,
            category: 'kimono',
            description: 'Inspiré des teintes chaudes du désert, cet ensemble kimono en satin est orné de broderies dorées et de motifs sahariens.',
            details: ['Tissu: Satin de soie', 'Broderie: Motifs sahariens', 'Doublure: Crêpe', 'Finitions: Bordures brodées'],
            images: ['images/collection-djellaba.jpg', 'images/couture.png'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'kimono-amethyste-imperiale',
            name: 'Ensemble Kimono Améthyste Impériale',
            price: 8000,
            category: 'kimono',
            description: 'Un ensemble d\'exception aux tons améthyste, brodé de fils d\'argent avec une coupe structurée et des finitions haut de gamme.',
            details: ['Tissu: Soie naturelle', 'Broderie: Fils d\'argent', 'Doublure: Satin', 'Finitions: Cristaux améthyste'],
            images: ['images/kimonovert.jpg', 'images/collection-caftan.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'kimono-majeste-pourpre',
            name: 'Ensemble Kimono Majesté Pourpre',
            price: 7000,
            category: 'kimono',
            description: 'Ensemble kimono majestueux en velours pourpre, avec des broderies traditionnelles et une silhouette structurée.',
            details: ['Tissu: Velours de soie', 'Broderie: Traditionnelle', 'Doublure: Satin', 'Finitions: Passementerie dorée'],
            images: ['images/tenue3.jpg', 'images/tenuex.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'kimono-murmures-ecarlates',
            name: 'Ensemble Kimono Murmures Écarlates',
            price: 5500,
            category: 'kimono',
            description: 'Un ensemble kimono audacieux aux tons écarlates, parfait pour les occasions spéciales avec sa coupe moderne.',
            details: ['Tissu: Crêpe georgette', 'Broderie: Motifs contemporains', 'Doublure: Viscose', 'Finitions: Ceinture en soie'],
            images: ['images/tenuex.jpg', 'images/collection-djellaba.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'kimono-lumiere-orient',
            name: 'Ensemble Kimono Lumière d\'Orient',
            price: 6000,
            category: 'kimono',
            description: 'Lumineux et délicat, cet ensemble kimono en organza brodé évoque la lumière dorée des matins d\'Orient.',
            details: ['Tissu: Organza de soie', 'Broderie: Fils dorés', 'Doublure: Satin léger', 'Finitions: Franges en soie'],
            images: ['images/couture.png', 'images/collection-caftan-simple.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'kimono-nuit-royale',
            name: 'Ensemble Kimono Nuit Royale',
            price: 7500,
            category: 'kimono',
            description: 'Un ensemble kimono sophistiqué aux tons sombres, idéal pour les soirées élégantes avec ses broderies scintillantes.',
            details: ['Tissu: Satin duchesse', 'Broderie: Cristaux et paillettes', 'Doublure: Soie', 'Finitions: Boutons en cristal'],
            images: ['images/collection-caftan.jpg', 'images/tenue3.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'kimono-elegance-doree',
            name: 'Ensemble Kimono Élégance Dorée',
            price: 6500,
            category: 'kimono',
            description: 'Raffinement et modernité se rencontrent dans cet ensemble kimono aux finitions dorées et à la coupe impeccable.',
            details: ['Tissu: Crêpe de soie', 'Broderie: Dorure à la main', 'Doublure: Satin', 'Finitions: Bordures en fil d\'or'],
            images: ['images/collection-caftan-simple.jpg', 'images/collection-kimono.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        }
    ],
    jellaba: [
        {
            id: 'jellaba-classique-royale',
            name: 'Jellaba Classique Royale',
            price: 5500,
            category: 'jellaba',
            description: 'Une jellaba d\'exception en laine mérinos, ornée de broderies Rbati traditionnelles et d\'une capuche finement travaillée.',
            details: ['Tissu: Laine mérinos', 'Broderie: Rbati traditionnelle', 'Capuche: Brodée artisanalement', 'Finitions: Sfifa et boutons traditionnels'],
            images: ['images/collection-djellaba.jpg', 'images/kimonovert.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'jellaba-moderne-elegante',
            name: 'Jellaba Moderne Élégante',
            price: 4500,
            category: 'jellaba',
            description: 'Réinterprétation moderne de la jellaba traditionnelle en crêpe marocain, avec des lignes épurées et des broderies contemporaines.',
            details: ['Tissu: Crêpe marocain', 'Broderie: Contemporaine', 'Capuche: Design moderne', 'Finitions: Boutons en nacre'],
            images: ['images/tenuex.jpg', 'images/collection-caftan.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'jellaba-beldi-prestige',
            name: 'Jellaba Beldi Prestige',
            price: 6000,
            category: 'jellaba',
            description: 'Jellaba beldi haut de gamme en tissu noble, avec une broderie minutieuse qui témoigne du savoir-faire artisanal marocain.',
            details: ['Tissu: Laine et soie', 'Broderie: Sfifa dorée', 'Capuche: Traditionnelle brodée', 'Finitions: Akaad en fil d\'or'],
            images: ['images/collection-caftan-simple.jpg', 'images/tenue3.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'jellaba-perle-du-rif',
            name: 'Jellaba Perle du Rif',
            price: 3800,
            category: 'jellaba',
            description: 'Inspirée des traditions rifaines, cette jellaba en laine fine allie chaleur et élégance avec ses motifs brodés caractéristiques.',
            details: ['Tissu: Laine fine', 'Broderie: Motifs rifains', 'Capuche: Pointue traditionnelle', 'Finitions: Pompons artisanaux'],
            images: ['images/tenue3.jpg', 'images/couture.png'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'jellaba-eclat-de-fes',
            name: 'Jellaba Éclat de Fès',
            price: 5000,
            category: 'jellaba',
            description: 'Hommage à la ville impériale de Fès, cette jellaba en soie mélangée arbore des broderies fassi raffinées.',
            details: ['Tissu: Soie mélangée', 'Broderie: Fassi raffinée', 'Capuche: Élégante brodée', 'Finitions: Boutons en passementerie'],
            images: ['images/kimonovert.jpg', 'images/collection-djellaba.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'jellaba-nuit-de-marrakech',
            name: 'Jellaba Nuit de Marrakech',
            price: 4200,
            category: 'jellaba',
            description: 'Évoquant les nuits envoûtantes de Marrakech, cette jellaba en velours est sublimée par des broderies en fil d\'argent.',
            details: ['Tissu: Velours de coton', 'Broderie: Fils d\'argent', 'Capuche: Arrondie élégante', 'Finitions: Sfifa argentée'],
            images: ['images/collection-caftan.jpg', 'images/tenuex.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'jellaba-lumiere-atlas',
            name: 'Jellaba Lumière d\'Atlas',
            price: 3500,
            category: 'jellaba',
            description: 'Légère et lumineuse, cette jellaba en lin mélangé est parfaite pour les saisons douces avec ses broderies délicates.',
            details: ['Tissu: Lin mélangé', 'Broderie: Délicate à la main', 'Capuche: Style berbère', 'Finitions: Bordures en soie'],
            images: ['images/couture.png', 'images/collection-caftan-simple.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'jellaba-splendeur-berbere',
            name: 'Jellaba Splendeur Berbère',
            price: 4800,
            category: 'jellaba',
            description: 'Célébration de l\'héritage berbère, cette jellaba en laine tissée à la main est ornée de motifs amazighs authentiques.',
            details: ['Tissu: Laine tissée à la main', 'Broderie: Motifs amazighs', 'Capuche: Traditionnelle berbère', 'Finitions: Pompons et franges'],
            images: ['images/collection-kimono.jpg', 'images/kimonovert.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        }
    ]
};

function getProductById(id) {
    for (const category of Object.values(PRODUCTS)) {
        const product = category.find(function(p) { return p.id === id; });
        if (product) return product;
    }
    return null;
}

function getProductsByCategory(category) {
    return PRODUCTS[category] || [];
}

function formatPrice(price) {
    return price.toLocaleString('fr-MA') + ' DH';
}
