import { renderHook, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { useUserData } from "../../src/hooks/useUserData";

globalThis.fetch = vi.fn();

const mockUserData = { userInfo: { id: "1", email: "test@example.com" } };

describe("useUserData", () => {
  beforeEach(() => {
    (fetch as any).mockClear();
  });

  it("returns user data on success", async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUserData,
    });

    const { result } = renderHook(() =>
      useUserData("test@example.com", "fake-api-key")
    );

    await waitFor(() => {
      expect(result.current).toEqual(mockUserData.userInfo);
    });
  });

  it("returns null on failure", async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: "Error loading user data" }),
    });

    const { result } = renderHook(() =>
      useUserData("test@example.com", "fake-api-key")
    );

    await waitFor(() => {
      expect(result.current).toBeNull();
    });
  });
});
