const general = {
  urls: {
    app: 'https://profiler-beta.vercel.app',
    sections: {
      music: {
        spotify: {
          profileBaseUrl: 'https://open.spotify.com/user',
          recentlyPlayedBaseUrl:
            'https://spotify-recently-played-readme.vercel.app/api',
        },
      },

      techs: {
        iconBaseUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons',
      },

      stats: {
        imageBaseUrl: 'https://github-readme-stats.vercel.app/api',
        streakBaseUrl: 'https://streak-stats.demolab.com',
      },

      socials: {
        iconBaseUrl:
          'https://raw.githubusercontent.com/sulaiman-coder/profiler/master/src/assets/icons/social',
        badgeBaseUrl: 'https://img.shields.io/static/v1',
      },

      profileViews: {
        badgeBaseUrl: 'https://visitor-badge.laobi.icu/badge',
        imageBaseUrl: 'https://profile-counter.glitch.me',
      },

      activities: {
        mediumBaseUrl:
          'https://github-read-medium-git-main.pahlevikun.vercel.app/latest',
      },
    },
  },

  storage: {
    prefix: '@prg-ms',
  },

  settings: {
    initial: {
      user: {},
    },

    preview: {
      user: {
        github: 'sulaiman-coder',
      },
    },
  },
};

export { general };
