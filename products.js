/* ============================================
   NADIA DAHBY - Product Catalog
   ============================================ */

const PRODUCTS = {
    caftan: [
        {
            id: 'caftan-rose',
            name: 'Caftan Rose',
            price: 13000,
            category: 'caftan',
            description: 'Un caftan rose d\'une élégance rare, confectionné en soie avec des broderies délicates. Les tons rosés apportent une touche de féminité et de raffinement.',
            details: ['Tissu: Soie naturelle', 'Couleur: Rose poudré', 'Doublure: Satin de soie', 'Finitions: Broderies artisanales'],
            images: ['images/kaftanrose.jpg', 'images/backkaftan.png', 'images/kaftan1.jpg', 'images/kaftan2.jpg', 'images/kaftan3.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'kimono-moderne-elegance',
            name: 'Kimono Moderne Élégance',
            price: 12000,
            category: 'kimono',
            description: 'Alliance parfaite entre tradition et modernité, ce caftan en crêpe de soie est sublimé par une broderie contemporaine aux motifs géométriques.',
            details: ['Tissu: Crêpe de soie', 'Broderie: Motifs géométriques modernes', 'Doublure: Satin', 'Finitions: Boutons en cristal'],
            images: ['images/kimonovert.jpg', 'images/mannequin2.jpg', 'images/mannequin2.2.jpg', 'images/mannequin2.3.jpg', 'images/collection-djellaba.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
    ],
    kimono: [
        {
            id: 'kimono-orange',
            name: 'Kimono Orange',
            price: 7000,
            category: 'kimono',
            description: 'Un kimono éclatant aux tons orangés, confectionné à la main avec des matières nobles. Porté par notre mannequin Habiba pour sublimer chaque détail.',
            details: ['Tissu: Crêpe de soie', 'Couleur: Orange raffiné', 'Doublure: Satin', 'Finitions: Broderies artisanales'],
            images: ['images/kimonorange.jpg', 'images/kimonohabiba2.jpeg', 'images/kimonohabiba3.jpeg', 'images/kimonohabiba4.jpeg', 'images/kimonohabiba5.jpeg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'kimono-mauve',
            name: 'Kimono Mauve',
            price: 7000,
            category: 'kimono',
            description: 'Un kimono mauve d\'une élégance subtile, confectionné avec des matières nobles. Les tons mauves apportent une touche de douceur et de sophistication.',
            details: ['Tissu: Crêpe de soie', 'Couleur: Mauve raffiné', 'Doublure: Satin', 'Finitions: Broderies artisanales'],
            images: ['images/kimonomauve.jpg', 'images/kimonomanequin1.jpg', 'images/kimonomanquin2.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        },
        {
            id: 'caftan-beldi-prestige',
            name: 'Kimono Beldi Prestige',
            price: 18000,
            category: 'kimono',
            description: 'Pièce d\'exception en velours de soie, ornée de broderies Rbati traditionnelles. Un hommage au savoir-faire ancestral marocain.',
            details: ['Tissu: Velours de soie', 'Broderie: Rbati traditionnelle', 'Doublure: Soie naturelle', 'Finitions: Perles et cristaux Swarovski'],
            images: ['images/tenuex.jpg', 'images/mannequin1.jpg', 'images/mannequin1.1.jpg', 'images/mannequin1.3.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        }
    ],
    jellaba: [
        {
            id: 'jellaba-verte',
            name: 'Jellaba Verte',
            price: 5500,
            category: 'jellaba',
            description: 'Une jellaba verte d\'une élégance naturelle, confectionnée avec des matières nobles. Les tons verts apportent une touche de fraîcheur et de sophistication.',
            details: ['Tissu: Crêpe marocain', 'Couleur: Vert raffiné', 'Capuche: Brodée artisanalement', 'Finitions: Sfifa et boutons traditionnels'],
            images: ['images/jellabaverte.jpg', 'images/jellabavertemannquin.jpg', 'images/jellabavertemannquin2.jpg', 'images/jellabavertemannquinback.jpg'],
            sizes: ['S', 'M', 'L', 'XL', 'Sur Mesure']
        }
    ],
    gandora: [
        {
            id: 'gandora-royale',
            name: 'Gandora Royale',
            price: 6500,
            category: 'gandora',
            description: 'Gandora d\'exception réalisée à la main, alliant l\'élégance traditionnelle marocaine à une coupe moderne. Un savoir-faire artisanal unique pour une pièce intemporelle.',
            details: ['Tissu: Satin duchesse', 'Broderie: Fils dorés faits main', 'Doublure: Satin de soie', 'Finitions: Passementerie artisanale'],
            images: ['images/gandora1.png', 'images/gandora1.1.jpeg', 'images/gandora1.2.jpeg', 'images/gandora1.3.jpeg', 'images/gandora1.4.jpeg'],
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
