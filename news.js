  // TAB FUNCTION
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active')); // Hapus semua active
      tab.classList.add('active'); // Kasih active ke yang diklik
    });
  });

  // LOAD MORE FUNCTION
  const moreNews = [
    {
      img: "https://image.playkakaogames.com/cms/live/news/3/b8bb18172a1dd61247c490f922e153dc.jpg",
      date: "APR 1, 2025",
      title: "BUNNY GIRL ANDROID VINETTE & RESERVE STAMINA UPDATE",
      text: "Join the biggest festival celebration with tons of rewards..."
    },
    {
      img: "https://image.playkakaogames.com/cms/live/news/3/f346eab5f74aa81680035de7e8abdfd5.jpg",
      date: "APR 1, 2025",
      title: "NEW HERO 'JERRY LITTLE VOLT' RELEASE ANNOUNCEMENT",
      text: "Several heroes and equipment will receive balance adjustments..."
    },
    {
      img: "https://image.playkakaogames.com/cms/live/news/3/1a1874d1d41e7378fec9ae41ae1e02c1.jpg",
      date: "MAR 31, 2025",
      title: "MAINTENANCE NOTICE - APRIL 1, 2025",
      text: "Dive into newly opened territories full of mysteries..."
    },
    {
      img: "https://image.playkakaogames.com/cms/live/news/3/5870536f2a50fa0d467dc4215fbc464a.jpg",
      date: "MAR 31, 2025",
      title: "[DEVELOPER'S LETTER] DIRECTOR ROBIN'S 7TH LETTER",
      text: "Scheduled maintenance will occur on MAR 18..."
    },
    {
      img: "https://image.playkakaogames.com/cms/live/news/3/95fd04082f5608c0104379145e8c90c1.jpg",
      date: "MAR 31, 2025",
      title: "NEW APRIL SUBSCRIPTION PACKAGE",
      text: "An exciting collaboration is coming soon..."
    },
    {
      img: "https://image.playkakaogames.com/cms/live/news/3/5870536f2a50fa0d467dc4215fbc464a.jpg",
      date: "MAR 24, 2025",
      title: "[DEVELOPER'S LETTER] DIRECTOR ROBIN'S 6TH LETTER",
      text: "New features will enhance your gaming experience..."
    },
    {
      img: "https://image.playkakaogames.com/cms/live/news/3/bd69e2a9a391bfafb60f58cdd323eba8.jpeg",
      date: "MAR 20, 2025",
      title: "NOTICE: GUILD RAID 2 BETA ISSUE",
      text: "Learn more about the warrior's backstory and skills..."
    },
    {
      img: "https://image.playkakaogames.com/cms/live/news/3/9c52203b44dbec62975e26a02123c7c4.jpg",
      date: "MAR 18, 2025",
      title: "SWEET TROUBLEMAKER GIRGAS UPDATE",
      text: "Exclusive items available only for a short period..."
    },
    {
      img: "https://image.playkakaogames.com/cms/live/news/3/1a1874d1d41e7378fec9ae41ae1e02c1.jpg",
      date: "MAR 17, 2025",
      title: "MAINTENANCE NOTICE - MARCH 18, 2025",
      text: "New weekly missions and rewards await you..."
    }
  ];

  const container = document.querySelector('.grid');
  const loadMoreButton = document.getElementById('loadMore');

  loadMoreButton.addEventListener('click', () => {
    moreNews.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.img}" alt="Announcement">
        <div class="card-content">
          <p class="card-date">ANNOUNCEMENTS | ${item.date}</p>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      `;
      container.appendChild(card);
    });

    loadMoreButton.style.display = 'none'; // Sembunyikan tombol setelah klik
  });

  console.log('Ini JS untuk news')