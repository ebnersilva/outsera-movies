import { describe, it, expect, vi, beforeEach } from 'vitest';
import { showInfoToast, showErrorToast, showSuccessToast } from '~/app/utils/showToast';
import { toast } from 'react-toastify';

vi.mock('react-toastify', () => ({
    toast: {
        info: vi.fn(),
        error: vi.fn(),
        success: vi.fn(),
    },
}));

describe('Toast Utils', () => {
    beforeEach(() => {
        // Limpar todos os mocks antes de cada teste
        vi.clearAllMocks();
    });

    it('showInfoToast should call toast.info with correct message', () => {
        const message = 'Info message';
        showInfoToast(message);
        expect(toast.info).toHaveBeenCalledWith(message);
    });

    it('showErrorToast should call toast.error with correct message', () => {
        const message = 'Error message';
        showErrorToast(message);
        expect(toast.error).toHaveBeenCalledWith(message);
    });

    it('showSuccessToast should call toast.success with correct message', () => {
        const message = 'Success message';
        showSuccessToast(message);
        expect(toast.success).toHaveBeenCalledWith(message);
    });
});