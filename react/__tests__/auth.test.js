/* eslint-disable no-undef */
// const request = require('supertest');
const sinon = require('sinon');
const { isAuthenticated } = require('../src/services/auth.js');

describe('unit tests - isAuthenticated', () => {
    it('should return a access token when it exists', () => {
        const mockToken =
            'BQAiIsvs1g-plQXHgbl7WJpIUnhV_MUKNU87YKvYaVzPPqrCyhKQY395rNJ5-U2z5D30GsAuwRkzVMb-6WlxqLsoDI_GWJ0hGJjdgR4mMvtbSQTcgNE92__J5wunlgBs9t8zSvP0Qn2ORmXU2aU1ZIQM7tuCi0Eu7HaVbMH75Hg1PgL50wsBg1M_MKitfYxe6T1rj8008RdghlQysXlg-D4tHNmEv6Z9TeXqLFxsBQrEB3zMkpABSv2rEGts7yT4cEU0JnjHxCtB1w8';
        sessionStorage.setItem('access_token', mockToken);
        expect(isAuthenticated()).toBe(mockToken);
    });

    it('should return false when not exists a access_token', async () => {
        sessionStorage.removeItem('access_token');
        sinon.stub(window.location, 'replace');
        isAuthenticated();
        expect(isAuthenticated()).toBe(false);
    });
});

// describe('integration - auth service', () => {});
