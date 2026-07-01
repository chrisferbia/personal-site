import { ImageResponse } from "next/og";

// Route segment config
export const alt = "Chris Ferbianto — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image generation
export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    background: "#0a0a0a",
                    padding: "80px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        fontSize: 30,
                        letterSpacing: 6,
                        color: "#a1a1aa",
                    }}
                >
                    PORTFOLIO
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 100,
                        fontWeight: 800,
                        color: "#fafafa",
                        marginTop: 20,
                    }}
                >
                    Chris Ferbianto
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 46,
                        color: "#d4d4d8",
                        marginTop: 8,
                    }}
                >
                    Full-Stack Developer
                </div>
            </div>
        ),
        { ...size }
    );
}
