-- Create products table
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    phrase TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'draft')),
    views INTEGER DEFAULT 0,
    votes_useful INTEGER DEFAULT 0,
    votes_useless INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Public read access for products" ON products
    FOR SELECT USING (true);

-- Create policy to allow admin updates (for simplicity, allowing all for now, but should be restricted in production)
CREATE POLICY "Enable all for authenticated users" ON products
    FOR ALL USING (auth.role() = 'authenticated');

-- Seed data
INSERT INTO products (name, phrase, price, image_url, status, views)
VALUES
('Relógio de Parede que Gira ao Contrário', 'Onde a utilidade é um mistério', 49.90, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMplh58sixbdMGt5S_BgjVXpPnQ6WeH4uHcHphKdEsSLVwkIw27hSTy4hoSpkkcqJAcuYlBAop6nK4PaCdmuPHYlaOQy1o_PpDi2qmOzAJ_0plrN-hZKrYDVh6uCM9bAa-UOQyPfBsxWDeC8CxcWSfm6ohHKRG2ljxra6FH_c7F3FEnVmpAhxzUVSjDcGbhx6DGtG7_a6d36SoB8ZpVW2Dmx3Wfs_kuOVAaOc8IY_8e0B8Z6PFxit3nsPE9KT5jP7jUxCZaFoSm9xE', 'active', 0),
('Nexus Core', 'The future of decentralized poverty...', 49.00, 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrzhslE-R0YO0_YuYxCLUeZk0Lhs1cOO2eHaAoKVJdXL2KycwBD_G3IWA2YZ_AMo4YJ70IL6emXrYWURrhJPER4RhaTfi4YtxUVuULSfBrF0FdzlY2ZLgSW834ThMJZS0opaSceg7P_Nn1SeGEVWpcKDdCm2ULMpsaL5m5Su2diVuouJ2cQ97tapML26plmElttqmr0S_1QMeoRfkH_sDzQ7Hsnu3RHdH6PDMbbLkh5sr3Jk3_fVKxjxLD8NfX08uEGrqNq6QD_SZR', 'active', 1200),
('Aether Drift', 'Drift away from basic interfaces...', 29.90, 'https://lh3.googleusercontent.com/aida-public/AB6AXuACmc7kCbdaJKs7K47CCgmzVDWQZHDO44X-SQoyD_g86sJ-p2xGzNlawHwQZkpsNzu0dKnnoe8C_QBMMN3y0jfswJNP5t4URTBc3YUQo5s6TcfnifcwQu9KhjTmNU_BipbXxT_dSZ8uU00n5HPi4wDA_RdqDVWMVSsz4SEjPDZ188sT2ReBPAy2Lt-C_p8w7Xvx137tcH6lkCCG-nZp0m-LpnwIyuvSgsusvp53Jmt8SpAxoeAgHeVesRgWpqDMCWm_hd_S2LQodmO_', 'active', 842),
('Pobreza Ultra', 'Luxury for everyone, or just for the brand.', 149.00, 'https://lh3.googleusercontent.com/aida-public/AB6AXuATwQvUmBAMVNf2otfcKhWN4r37dmCY8_M_fintY91Mfp1YCozwSvUk2nZoxgsaXEaEVZoKadkvNe0tShpZLJou5FH5Sk2u6NqS5iVw4sPtBdsR2GNr2a37EiZOOkdAtPVTIVLHOG-XAA-4bzr7BNkf-fPQJX52EZFLrZYJgpLrWoWxfGCXuul3svj6jTtIihvmwiU3JBPFfIPszXncj5t7UcQ0yMi31GJtsAYhYjCwQs3wFUmsAHHn3_KNCaZ4Aap0d1i4SRc-bQPO', 'draft', 2500);
