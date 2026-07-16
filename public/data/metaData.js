export const jsonLd={
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type':  'Organization',
        '@id': 'https://www.semiconsteelandalloys.com/#organization',
        name: 'Semicon Steel And Alloys',
        sameAs: [
          'https://www.facebook.com/semiconsteelandalloys',
          'https://www.linkedin.com/company/semiconsteelandalloys',
          'https://twitter.com/semiconsteel'
        ],
        email: 'semiconsteelandalloys@gmail.com',
        telephone: '+917821031398',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2nd Floor, Flat No. 203, Shree Sachhai Mata Park, H.No. 1639/7, Near Oswal Park, Rahnal',
          addressLocality: 'Bhiwandi',
          addressRegion: 'Maharashtra',
          postalCode: '421302',
          addressCountry: 'IN'
        },
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://www.semiconsteelandalloys.com/#logo',
          url: 'https://www.semiconsteelandalloys.com/Images/base/ssaLogo.png',
          contentUrl: 'https://www.semiconsteelandalloys.com/Images/base/ssaLogo.png',
          caption: 'Semicon Steel And Alloys',
          inLanguage: 'en-US',
          width: '1433',
          height: '260'
        },
        image: {
          '@type': 'ImageObject',
          '@id': 'https://www.semiconsteelandalloys.com/#image',
          url: 'https://www.semiconsteelandalloys.com/Images/base/BaseImg.jpg',
          contentUrl: 'https://www.semiconsteelandalloys.com/Images/base/BaseImg.jpg',
          caption: 'Semicon Steel And Alloys',
          inLanguage: 'en-US',
          width: '1579',
          height: '430'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.semiconsteelandalloys.com/#website',
        url: 'https://www.semiconsteelandalloys.com',
        name: 'Semicon Steel And Alloys',
        publisher: { '@id': 'https://www.semiconsteelandalloys.com/#organization' },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.semiconsteelandalloys.com/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.semiconsteelandalloys.com/#webpage',
        url: 'https://www.semiconsteelandalloys.com/',
        name: "Nickel & Cobalt Alloys Specialist - Semicon Steel And Alloys",
        datePublished: '2026-07-16T07:12:48+00:00',
        dateModified: '2026-07-16T07:12:48+00:00',
        about: { '@id': 'https://www.semiconsteelandalloys.com/#organization' },
        isPartOf: { '@id': 'https://www.semiconsteelandalloys.com/#website' },
        inLanguage: 'en-US'
      },
      {
        '@type': 'Article',
        headline: "Nickel & Cobalt Alloys Specialist - Semicon Steel And Alloys",
        keywords: 'Nickel Alloys, Alloy Scrap, Inconel Scrap, Hastelloy Scrap, Monel Scrap, Cobalt Alloys, Nimonic, Superalloy Scrap, Titanium, Tungsten, Molybdenum',
        datePublished: '2026-07-16T07:12:48+00:00',
        dateModified: '2026-07-16T07:12:48+00:00',
        author: {
          '@id': 'https://www.semiconsteelandalloys.com/#organization',
          name: 'Semicon Steel And Alloys'
        },
        publisher: { '@id': 'https://www.semiconsteelandalloys.com/#organization' },
        description: "Semicon Steel And Alloys is an ISO 9001:2015 certified importer, exporter & foundry supplier of all types of alloy scrap with a special focus on nickel alloys: Inconel 600/625/718/825, Hastelloy C-22/C-276/B, Monel, cobalt alloys, tungsten, titanium & molybdenum metals.",
        name: "Nickel & Cobalt Alloys Specialist - Semicon Steel And Alloys",
        '@id': 'https://www.semiconsteelandalloys.com/#richSnippet',
        isPartOf: { '@id': 'https://www.semiconsteelandalloys.com/#webpage' },
        inLanguage: 'en-US',
        mainEntityOfPage: { '@id': 'https://www.semiconsteelandalloys.com/#webpage' }
      }
    ]
  }
