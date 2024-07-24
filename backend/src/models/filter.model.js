import { model, Schema } from 'mongoose';

export const FilterSchema = new Schema(
  {
    p_code: { type: String, required: true },
    p_name: { type: String, required: true },
    imageUrl: { type: String, required: false },
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const FilterModel = model('filter', FilterSchema);