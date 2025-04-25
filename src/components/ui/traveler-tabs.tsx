// // 'use client'

// // import { useState } from 'react'
// // import { Input } from '@/components/ui/input'
// // import { Label } from '@/components/ui/label'
// // import { Card } from '@/components/ui/card'

// // interface TravelerTabsProps {
// //   travelerCount: number
// //   travelerData: any[]
// //   updateTraveler: (index: number, data: any) => void
// // }

// // export function TravelerTabs({
// //   travelerCount,
// //   travelerData,
// //   updateTraveler
// // }: TravelerTabsProps) {
// //   const [activeTab, setActiveTab] = useState(0)

// //   const handleInputChange = (index: number, field: string, value: string) => {
// //     const updated = { ...travelerData[index], [field]: value }
// //     updateTraveler(index, updated)
// //   }

// //   return (
// //     <div>
// //       <div className="flex flex-wrap gap-2 mb-4">
// //         {Array.from({ length: travelerCount }).map((_, i) => (
// //           <button
// //             key={i}
// //             onClick={() => setActiveTab(i)}
// //             className={`px-4 py-2 rounded border ${
// //               i === activeTab
// //                 ? 'bg-primary text-white'
// //                 : 'bg-muted text-foreground hover:bg-accent'
// //             }`}
// //           >
// //             Traveler {i + 1}
// //           </button>
// //         ))}
// //       </div>

// //       <Card className="p-4 space-y-4">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div>
// //             <Label>First Name</Label>
// //             <Input
// //               value={travelerData[activeTab]?.firstName || ''}
// //               onChange={(e) =>
// //                 handleInputChange(activeTab, 'firstName', e.target.value)
// //               }
// //             />
// //           </div>
// //           <div>
// //             <Label>Last Name</Label>
// //             <Input
// //               value={travelerData[activeTab]?.lastName || ''}
// //               onChange={(e) =>
// //                 handleInputChange(activeTab, 'lastName', e.target.value)
// //               }
// //             />
// //           </div>
// //           <div>
// //             <Label>Passport Number</Label>
// //             <Input
// //               value={travelerData[activeTab]?.passport || ''}
// //               onChange={(e) =>
// //                 handleInputChange(activeTab, 'passport', e.target.value)
// //               }
// //             />
// //           </div>
// //           <div>
// //             <Label>Date of Birth</Label>
// //             <Input
// //               type="date"
// //               value={travelerData[activeTab]?.dob || ''}
// //               onChange={(e) =>
// //                 handleInputChange(activeTab, 'dob', e.target.value)
// //               }
// //             />
// //           </div>
// //         </div>
// //       </Card>
// //     </div>
// //   )
// // }
// 'use client'

// interface TravelerTabsProps {
//   travelerCount: number
//   currentTraveler: number
//   setCurrentTraveler: (index: number) => void
// }

// export function TravelerTabs({
//   travelerCount,
//   currentTraveler,
//   setCurrentTraveler
// }: TravelerTabsProps) {
//   return (
//     <div className="flex flex-wrap gap-2 mb-4">
//       {Array.from({ length: travelerCount }).map((_, i) => (
//         <button
//           key={i}
//           onClick={() => setCurrentTraveler(i)}
//           className={`px-4 py-2 rounded border ${
//             i === currentTraveler
//               ? 'bg-primary text-white'
//               : 'bg-muted text-foreground hover:bg-accent'
//           }`}
//         >
//           Traveler {i + 1}
//         </button>
//       ))}
//     </div>
//   )
// }
'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

interface TravelerTabsProps {
  travelerCount: number
  travelerData: any[]
  updateTraveler: (index: number, data: any) => void
  currentTraveler: number
  setCurrentTraveler: (index: number) => void
}

export function TravelerTabs({
  travelerCount,
  travelerData,
  updateTraveler,
  currentTraveler,
  setCurrentTraveler
}: TravelerTabsProps) {
  const handleChange = (field: string, value: string) => {
    const updated = { ...travelerData[currentTraveler], [field]: value }
    updateTraveler(currentTraveler, updated)
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4">
        {Array.from({ length: travelerCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentTraveler(i)}
            className={`px-4 py-2 rounded border ${
              i === currentTraveler
                ? 'bg-primary text-white'
                : 'bg-muted text-foreground hover:bg-accent'
            }`}
          >
            Traveler {i + 1}
          </button>
        ))}
      </div>

      {/* Minimal fields to confirm state per traveler (you can customize further) */}
      <Card className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>First Name</Label>
            <Input
              value={travelerData[currentTraveler]?.firstName || ''}
              onChange={(e) => handleChange('firstName', e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input
              value={travelerData[currentTraveler]?.lastName || ''}
              onChange={(e) => handleChange('lastName', e.target.value)}
              placeholder="Last Name"
            />
          </div>
        </div>
      </Card>
    </>
  )
}
