import React from 'react';
import { motion } from 'framer-motion';
import { getZodiacInfo, getElementInfo, getQualityInfo } from '@/lib/astrology';

interface AstrologicalInfoProps {
  sunSign: string;
  moonSign: string;
  ascendant: string;
}

const AstrologicalInfo: React.FC<AstrologicalInfoProps> = ({
  sunSign,
  moonSign,
  ascendant
}) => {
  const sunSignInfo = getZodiacInfo(sunSign);
  const moonSignInfo = getZodiacInfo(moonSign);
  const ascendantInfo = getZodiacInfo(ascendant);

  if (!sunSignInfo || !moonSignInfo || !ascendantInfo) {
    return null;
  }

  return (
    <div className="bg-card p-8 rounded-lg gradient-border max-w-2xl mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Astrological Profile</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Sun Sign */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 bg-secondary/50 rounded-lg"
        >
          <div className="text-center mb-2">
            <span className="text-3xl" style={{ color: sunSignInfo.color }}>{sunSignInfo.symbol}</span>
            <h3 className="font-semibold mt-2">Sun Sign: {sunSign}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p><span className="text-primary">Element:</span> {sunSignInfo.element}</p>
            <p><span className="text-primary">Planet:</span> {sunSignInfo.planet}</p>
            <p><span className="text-primary">Quality:</span> {sunSignInfo.quality}</p>
          </div>
        </motion.div>

        {/* Moon Sign */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 bg-secondary/50 rounded-lg"
        >
          <div className="text-center mb-2">
            <span className="text-3xl" style={{ color: moonSignInfo.color }}>{moonSignInfo.symbol}</span>
            <h3 className="font-semibold mt-2">Moon Sign: {moonSign}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p><span className="text-primary">Element:</span> {moonSignInfo.element}</p>
            <p><span className="text-primary">Planet:</span> {moonSignInfo.planet}</p>
            <p><span className="text-primary">Quality:</span> {moonSignInfo.quality}</p>
          </div>
        </motion.div>

        {/* Ascendant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-4 bg-secondary/50 rounded-lg"
        >
          <div className="text-center mb-2">
            <span className="text-3xl" style={{ color: ascendantInfo.color }}>{ascendantInfo.symbol}</span>
            <h3 className="font-semibold mt-2">Ascendant: {ascendant}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p><span className="text-primary">Element:</span> {ascendantInfo.element}</p>
            <p><span className="text-primary">Planet:</span> {ascendantInfo.planet}</p>
            <p><span className="text-primary">Quality:</span> {ascendantInfo.quality}</p>
          </div>
        </motion.div>
      </div>

      {/* Element Balance */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Your Element Balance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(getElementInfo(sunSignInfo.element)).map(([key, value]) => (
            <div key={key} className="p-3 rounded-lg text-center" style={{ backgroundColor: value.color + '20' }}>
              <h4 className="font-medium mb-2">{value.name}</h4>
              <div className="text-sm text-muted-foreground">
                {Array.isArray(value.traits) && value.traits.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Your Dominant Quality</h3>
        <div className="p-4 rounded-lg bg-secondary/50">
          <h4 className="font-medium mb-2">{sunSignInfo.quality}</h4>
          <p className="text-sm text-muted-foreground">
            {getQualityInfo(sunSignInfo.quality)?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AstrologicalInfo;