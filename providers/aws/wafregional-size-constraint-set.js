"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WafregionalSizeConstraintSet = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function wafregionalSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function wafregionalSizeConstraintSetSizeConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        text_transformation: cdktf.stringToTerraform(struct.textTransformation),
        field_to_match: cdktf.listMapper(wafregionalSizeConstraintSetSizeConstraintsFieldToMatchToTerraform)(struct.fieldToMatch),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html aws_wafregional_size_constraint_set}.
 */
class WafregionalSizeConstraintSet extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html aws_wafregional_size_constraint_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_wafregional_size_constraint_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
        this._sizeConstraints = config.sizeConstraints;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get sizeConstraints() {
        return this.interpolationForAttribute('size_constraints');
    }
    set sizeConstraints(value) {
        this._sizeConstraints = value;
    }
    resetSizeConstraints() {
        this._sizeConstraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sizeConstraintsInput() {
        return this._sizeConstraints;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            size_constraints: cdktf.listMapper(wafregionalSizeConstraintSetSizeConstraintsToTerraform)(this._sizeConstraints),
        };
    }
}
exports.WafregionalSizeConstraintSet = WafregionalSizeConstraintSet;
_a = JSII_RTTI_SYMBOL_1;
WafregionalSizeConstraintSet[_a] = { fqn: "hashicorp_aws.WafregionalSizeConstraintSet", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FmcmVnaW9uYWwtc2l6ZS1jb25zdHJhaW50LXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndhZnJlZ2lvbmFsLXNpemUtY29uc3RyYWludC1zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7QUEyQi9CLFNBQVMsa0VBQWtFLENBQUMsTUFBZ0U7SUFDMUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBdUJELFNBQVMsc0RBQXNELENBQUMsTUFBb0Q7SUFDbEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3hFLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3hFLGNBQWMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGtFQUFrRSxDQUFDLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztLQUMzSCxDQUFBO0FBQ0gsQ0FBQzs7OztBQU1ELE1BQWEsNEJBQTZCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUV2RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7SUFTZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUEwQztRQUN6RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHFDQUFxQztZQUM1RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ2pELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsa0JBQWtCLENBQVEsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBb0Q7UUFDN0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtJQUM5QixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUNsSCxDQUFDO0lBQ0osQ0FBQzs7QUFoRkgsb0VBaUZDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL3dhZnJlZ2lvbmFsX3NpemVfY29uc3RyYWludF9zZXQuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFdhZnJlZ2lvbmFsU2l6ZUNvbnN0cmFpbnRTZXRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNpemVDb25zdHJhaW50cz86IFdhZnJlZ2lvbmFsU2l6ZUNvbnN0cmFpbnRTZXRTaXplQ29uc3RyYWludHNbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2FmcmVnaW9uYWxTaXplQ29uc3RyYWludFNldFNpemVDb25zdHJhaW50c0ZpZWxkVG9NYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGE/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gd2FmcmVnaW9uYWxTaXplQ29uc3RyYWludFNldFNpemVDb25zdHJhaW50c0ZpZWxkVG9NYXRjaFRvVGVycmFmb3JtKHN0cnVjdD86IFdhZnJlZ2lvbmFsU2l6ZUNvbnN0cmFpbnRTZXRTaXplQ29uc3RyYWludHNGaWVsZFRvTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FmcmVnaW9uYWxTaXplQ29uc3RyYWludFNldFNpemVDb25zdHJhaW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb25PcGVyYXRvcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzaXplOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRleHRUcmFuc2Zvcm1hdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpZWxkVG9NYXRjaDogV2FmcmVnaW9uYWxTaXplQ29uc3RyYWludFNldFNpemVDb25zdHJhaW50c0ZpZWxkVG9NYXRjaFtdO1xufVxuXG5mdW5jdGlvbiB3YWZyZWdpb25hbFNpemVDb25zdHJhaW50U2V0U2l6ZUNvbnN0cmFpbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogV2FmcmVnaW9uYWxTaXplQ29uc3RyYWludFNldFNpemVDb25zdHJhaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uX29wZXJhdG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb25PcGVyYXRvciksXG4gICAgc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplKSxcbiAgICB0ZXh0X3RyYW5zZm9ybWF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRleHRUcmFuc2Zvcm1hdGlvbiksXG4gICAgZmllbGRfdG9fbWF0Y2g6IGNka3RmLmxpc3RNYXBwZXIod2FmcmVnaW9uYWxTaXplQ29uc3RyYWludFNldFNpemVDb25zdHJhaW50c0ZpZWxkVG9NYXRjaFRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpZWxkVG9NYXRjaCksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgV2FmcmVnaW9uYWxTaXplQ29uc3RyYWludFNldCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBXYWZyZWdpb25hbFNpemVDb25zdHJhaW50U2V0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfd2FmcmVnaW9uYWxfc2l6ZV9jb25zdHJhaW50X3NldCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fc2l6ZUNvbnN0cmFpbnRzID0gY29uZmlnLnNpemVDb25zdHJhaW50cztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBzaXplX2NvbnN0cmFpbnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NpemVDb25zdHJhaW50cz86IFdhZnJlZ2lvbmFsU2l6ZUNvbnN0cmFpbnRTZXRTaXplQ29uc3RyYWludHNbXTtcbiAgcHVibGljIGdldCBzaXplQ29uc3RyYWludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2l6ZV9jb25zdHJhaW50cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNpemVDb25zdHJhaW50cyh2YWx1ZTogV2FmcmVnaW9uYWxTaXplQ29uc3RyYWludFNldFNpemVDb25zdHJhaW50c1tdICkge1xuICAgIHRoaXMuX3NpemVDb25zdHJhaW50cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpemVDb25zdHJhaW50cygpIHtcbiAgICB0aGlzLl9zaXplQ29uc3RyYWludHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpemVDb25zdHJhaW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplQ29uc3RyYWludHNcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBzaXplX2NvbnN0cmFpbnRzOiBjZGt0Zi5saXN0TWFwcGVyKHdhZnJlZ2lvbmFsU2l6ZUNvbnN0cmFpbnRTZXRTaXplQ29uc3RyYWludHNUb1RlcnJhZm9ybSkodGhpcy5fc2l6ZUNvbnN0cmFpbnRzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=