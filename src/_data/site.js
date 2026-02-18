// src/_data/site.js
// This file controls ALL artist-specific content across the site.
// To set up a new client: just update this file, nothing else.

module.exports = {
  // ─── Artist Identity ─────────────────────────────────────────────────
  artistName: "Thomas Windsor",
  tagline: "Artist | Painting Therapy",
  bio: "Join artist Thomas Windsor as he shares his emotions and celebrates nature.",
  
  // ─── Contact Info ────────────────────────────────────────────────────
  email: "alihwebdev@gmail.com",  // update per client
  phone: null,  // set to null to hide, or "+1 (555) 123-4567"
  formEndpoint: "https://formspree.io/f/{form_id}",  // update with actual Formspree form ID
  
  // ─── Social Media ────────────────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/thomaswindsorstudio/?hl=en",
    youtube: "https://www.youtube.com/@Thomas_Windsor",
    facebook: "https://www.facebook.com/thomaswindsorstudio/?locale=en_GB",
    tiktok: "https://www.tiktok.com/@thomas_windsor",
    // Set any to null to hide that platform
  },
  
  // ─── YouTube Series (specific to Thomas, may not apply to all clients) ───
  youtubeSeriesName: "Painting Therapy",
  youtubeSeriesDescription: "A Youtube series that features artist Thomas Windsor as he shares his emotions and celebrates nature through art.",
  latestYoutubeVideoId: "k1onUZNmCxI",  // the ID from youtube.com/watch?v=ID
  hasYoutubeSeries: true,  // set to false for clients without a series
  
  // ─── About Page Content ──────────────────────────────────────────────
  aboutPhilosophy: {
    paragraph1: "Artists paint ideas, not things. This simple truth guides every brushstroke in my studio. I believe anyone can paint—what matters isn't technical skill, but the ideas you bring to the canvas.",
    paragraph2: "Painting is my way of understanding life and discovering happiness. It's not about creating perfect landscapes; it's about exploring what those landscapes mean, what they reveal about the world and about myself.",
    paragraph3: "AI can't enjoy making art. That's why I paint—even if nothing ever sells. The act of painting, the process itself, is where the value lives. Each of my paintings represents a moment of presence, a conversation with myself, a meditation on what it means to be alive."
  },
  
  aboutYoutubeSeries: "It is called Painting Therapy because it is my Painting Therapy. This is a place for me to express my feelings, my thoughts. Life is always changing. That's why, we always need to be aware of what's happening internally. Being there, is being awake.",
  
  aboutVideoId: "X3vbDBoTpbw",  // YouTube video ID for about page, or null to hide
  
  aboutInvitation: {
    paragraph1: "This isn't just my journey—it's an invitation for you to follow along, paint alongside me, or embark on your own creative exploration. Every week, I share a new episode where I paint and reflect. Whether you pick up a brush yourself or simply watch, you're part of this process.",
    paragraph2: "Join me in celebrating nature, exploring ideas, and discovering what painting can teach us about ourselves."
  },
  
  // ─── Gallery Page ────────────────────────────────────────────────────
  galleryIntro: "Explore the collection of therapeutic landscape paintings.<br>Each piece is an original oil painting created with mindfulness and care.",
  
  // ─── Branding & Colors ───────────────────────────────────────────────
  // (Note: You'd eventually move CSS color variables here too, but start with content first)
  colors: {
    primary: "#your-hex-here",   // placeholder for future CSS integration
    accent: "#your-hex-here",
  },
  
  // ─── Shipping & Policies ─────────────────────────────────────────────
  shipsInternationally: true,
  shippingTime: "3-7 days, depending on your location",
  doesCommissions: true,
  signsAllPaintings: true,
  
  // ─── Homepage Content ────────────────────────────────────────────────
  heroImage: "/assets/images/painting-therapy-hero-pic.jpg",
  heroImageAlt: "Painting Therapy",
  
  // Card content (the four cards on homepage)
  cards: [
    {
      image: "/assets/images/card-one.png",
      title: "Painting Therapy",
      text: "A way to bring peace and happiness in your life."
    },
    {
      image: "/assets/images/card-two.png",
      title: "Support an Artist",
      text: "Your purchase directly supports an independent creator and his craft."
    },
    {
      image: "/assets/images/card-three.png",
      title: "From Studio to Home",
      text: "Each painting is carefully packaged and shipped from Thomas's studio."
    },
    {
      image: "/assets/images/card-four.png",
      title: "Created with Joy",
      text: "AI can't enjoy making art."
    }
  ],
  
  // ─── SEO ─────────────────────────────────────────────────────────────
  siteTitle: "Thomas Windsor Portfolio",
  siteDescription: "Original paintings by Thomas Windsor. Watch free painting therapy episodes on YouTube.",
  
  // ─── Copyright ───────────────────────────────────────────────────────
  copyrightYear: new Date().getFullYear(),  // auto-updates every year
};