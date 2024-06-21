import { isProduction } from '../utility';

declare const ga: any;

export function track(
  category:
    | 'Home-New'
    | 'Recording'
    | 'Listening'
    | 'Profile'
    | 'Languages'
    | 'Data'
    | 'Sharing'
    | 'Dashboard'
    | 'Global'
    | 'Nav'
    | 'Landing'
    | 'Challenge'
    | 'Error'
    | 'SingleReview'
    | 'SingleSubmission'
    | 'BulkSubmission',
  action: string,
  locale?: string
) {
  if (isProduction() && typeof ga === 'function') {
    ga('send', 'event', category, action, locale);
  } else {
    console.debug('analytics event (not tracked here)', {
      category,
      action,
      locale,
    });
  }
}

export function trackGlobal(
  action:
    | 'change-language'
    | 'github'
    | 'discourse'
    | 'contact'
    | 'footer-newsletter'
    | 'matrix'
    | 'blog',
  locale: string
) {
  track('Global', action, locale);
}

export function trackNav(route: string, locale: string) {
  track('Nav', route, locale);
}

export function trackHome(
  action:
    | 'speak'
    | 'speak-mars'
    | 'listen'
    | 'read-more'
    | 'metric-locale-change'
    | 'change-benefits-tabs'
    | 'click-whats-public-item'
    | 'click-benefits-item'
    | 'click-benefits-register',
  locale: string
) {
  track('Home-New', action, locale);
}

export function trackRecording(
  action:
    | 'record'
    | 'submit'
    | 'rerecord'
    | 'discard-ongoing'
    | 'view-shortcuts'
    | 'shortcut'
    | 'skip'
    | 'listen',
  locale: string
) {
  track('Recording', action, locale);
}

export function trackListening(
  action:
    | 'listen'
    | 'listen-home'
    | 'vote-yes'
    | 'vote-no'
    | 'view-shortcuts'
    | 'shortcut'
    | 'skip',
  locale: string
) {
  track('Listening', action, locale);
}

export function trackProfile(
  action:
    | 'create'
    | 'login'
    | 'give-email'
    | 'give-username'
    | 'give-accent'
    | 'give-age'
    | 'give-gender'
    | 'give-avatar'
    | 'contribution-conversion-modal',
  locale: string
) {
  track('Profile', action, locale);
}

export function trackDataset(action: string, locale: string) {
  track('Data', action, locale);
}

export function trackSharing(
  channel: 'facebook' | 'twitter' | 'link',
  locale: string
) {
  track('Sharing', channel, locale);
}

export function trackDashboard(
  action:
    | 'speak-cta'
    | 'listen-cta'
    | 'change-language'
    | 'leaderboard-load-more',
  locale: string
) {
  track('Dashboard', action, locale);
}

export function trackLanding(action: 'speak' | 'profile' | 'about') {
  track('Landing', action);
}

export function trackChallenge(
  action:
    | 'dashboard-view'
    | 'modal-invite'
    | 'modal-onboarding'
    | 'modal-welcome'
) {
  track('Challenge', action);
}

export const trackSingleReview = (
  action: 'vote-yes' | 'vote-no' | 'skip' | 'report-button-click',
  locale: string
) => track('SingleReview', action, locale);

export const trackSingleSubmission = (
  action: 'toggle-button-click' | 'submit',
  locale: string
) => track('SingleSubmission', action, locale);

export const trackBulkSubmission = (
  action:
    | 'submit'
    | 'upload-button-click'
    | 'submit-button-click'
    | 'expandable-information-click-open'
    | 'expandable-information-click-close',
  locale: string
) => track('BulkSubmission', action, locale);

// Error pages send the full previous route as a third argument, which is
// typically reserved for locale.
export function trackError(action: '404' | '503' | '500', route: string) {
  track('Error', action, route);
}

export function getTrackClass(service: 'amp' | 'fs', name: string) {
  return `track-${service}-${name}`;
}
