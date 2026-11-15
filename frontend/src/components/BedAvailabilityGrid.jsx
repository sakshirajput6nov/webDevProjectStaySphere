import React from 'react';
import { Bed, CheckCircle2, User, ShieldCheck, Sparkles, Home, Layers } from 'lucide-react';

export default function BedAvailabilityGrid({
  rooms = [],
  selectedBedId,
  onSelectBed,
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-slate-900">Room & Bed Inventory</h3>
            <span className="text-xs bg-brand-50 text-brand-700 font-semibold px-2.5 py-0.5 rounded-full border border-brand-200">
              Live Vacancy
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Select your exact bed. Transparent roommate profile and room specifications.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span>
            <span className="text-slate-600">Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-300"></span>
            <span className="text-slate-400">Occupied</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-brand-600 ring-4 ring-brand-200"></span>
            <span className="text-brand-700 font-bold">Selected</span>
          </div>
        </div>
      </div>

      {rooms.length === 0 ? (
        <div className="py-8 text-center text-slate-400 text-sm">
          No rooms configured for this property yet.
        </div>
      ) : (
        <div className="space-y-6">
          {rooms.map((room) => {
            const totalBeds = room.beds?.length || 0;
            const availableBeds = room.beds?.filter((b) => !b.isOccupied).length || 0;

            return (
              <div
                key={room.roomId}
                className="border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-slate-50/50 to-white hover:border-slate-300 transition-colors"
              >
                {/* Room Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-base shadow-sm">
                      {room.roomNumber}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">Room {room.roomNumber}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {room.sharingType} Sharing
                        </span>
                        <span className="text-xs text-slate-500">Floor {room.floor}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                        {room.hasAttachedBathroom && <span>🚿 Attached Bath</span>}
                        {room.hasBalcony && <span>🌿 Private Balcony</span>}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-base font-extrabold text-slate-900">
                      ₹{room.rentPerBed.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-slate-500">/mo per bed</span>
                    </div>
                    <div className="text-xs text-emerald-600 font-medium">
                      {availableBeds} of {totalBeds} bed{totalBeds > 1 ? 's' : ''} vacant
                    </div>
                  </div>
                </div>

                {/* Individual Beds Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {room.beds?.map((bed) => {
                    const isSelected = selectedBedId === bed.bedId;
                    const isOccupied = bed.isOccupied;

                    return (
                      <div
                        key={bed.bedId}
                        onClick={() => {
                          if (!isOccupied && onSelectBed) {
                            onSelectBed(room, bed);
                          }
                        }}
                        className={`relative rounded-xl p-4 transition-all ${
                          isOccupied
                            ? 'bg-slate-100/70 border border-slate-200 cursor-not-allowed opacity-75'
                            : isSelected
                            ? 'bg-brand-50/70 border-2 border-brand-600 ring-2 ring-brand-500/20 shadow-md cursor-pointer'
                            : 'bg-white border border-slate-200 hover:border-brand-300 hover:shadow-sm cursor-pointer'
                        }`}
                      >
                        {/* Bed Title and Selection Status */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Bed
                              className={`w-4 h-4 ${
                                isSelected
                                  ? 'text-brand-600'
                                  : isOccupied
                                  ? 'text-slate-400'
                                  : 'text-emerald-600'
                              }`}
                            />
                            <span className="font-semibold text-sm text-slate-900">
                              {bed.bedNumber}
                            </span>
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-5 h-5 text-brand-600 fill-brand-100" />
                          )}
                        </div>

                        {/* Status Label */}
                        <div className="mt-2">
                          {isOccupied ? (
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-200/60 px-2.5 py-1 rounded-md">
                              <User className="w-3.5 h-3.5 text-slate-400" />
                              <span>
                                Occupied {bed.tenant?.college ? `(${bed.tenant.college})` : ''}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                Available for Booking
                              </span>
                              <span className="text-brand-600 font-bold">Select Bed</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
