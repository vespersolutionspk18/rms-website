import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const LogoMarquee = () => {

  const logoStyle = { margin: '0 40px' }

  const logos = [
    <Image src="/assets/logos/adb.svg" alt="ADB" height={40} width={0} style={{ width: 'auto', height: '40px' }} key="adb" />,
    <Image src="/assets/logos/unicef.svg" alt="UNICEF" height={40} width={0} style={{ width: 'auto', height: '40px' }} key="unicef" />,
    <Image src="/assets/logos/cisco.svg" alt="Cisco" height={40} width={0} style={{ width: 'auto', height: '40px' }} key="cisco" />,
    <Image src="/assets/logos/kfw.svg" alt="KfW" height={40} width={0} style={{ width: 'auto', height: '40px' }} key="kfw" />,
    <Image src="/assets/logos/Citi.svg" alt="Citi" height={40} width={0} style={{ width: 'auto', height: '40px' }} key="citi" />,
    <Image src="/assets/logos/usaid.svg" alt="USAID" height={40} width={0} style={{ width: 'auto', height: '40px' }} key="usaid" />,
    <Image src="/assets/logos/undp.svg" alt="UNDP" height={40} width={0} style={{ width: 'auto', height: '40px' }} key="undp" />,
    <Image src="/assets/logos/gtz.svg" alt="GTZ" height={40} width={0} style={{ width: 'auto', height: '40px' }} key="gtz" />,
    <Image src="/assets/logos/UKaid.svg" alt="UK Aid" height={40} width={0} style={{ width: 'auto', height: '40px' }} key="ukaid" />,
    <Image src="/assets/logos/worldbank.svg" alt="World Bank" height={40} width={0} style={{ width: 'auto', height: '40px' }} key="worldbank" />,
  ]

  return (
    <div className="bg-black py-10">
      <div className="overflow-hidden">
        <Marquee gradient={false} pauseOnHover={false} speed={50}>
          {logos.map((logo, index) => (
            <div key={index} style={logoStyle}>
              {logo}
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`repeat-${index}`} style={logoStyle}>
              {logo}
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`repeat2-${index}`} style={logoStyle}>
              {logo}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default LogoMarquee