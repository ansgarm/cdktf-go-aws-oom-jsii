"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WafregionalByteMatchSet = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function wafregionalByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function wafregionalByteMatchSetByteMatchTuplesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        target_string: cdktf.stringToTerraform(struct.targetString),
        text_transformation: cdktf.stringToTerraform(struct.textTransformation),
        field_to_match: cdktf.listMapper(wafregionalByteMatchSetByteMatchTuplesFieldToMatchToTerraform)(struct.fieldToMatch),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html aws_wafregional_byte_match_set}.
 */
class WafregionalByteMatchSet extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html aws_wafregional_byte_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_wafregional_byte_match_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
        this._byteMatchTuples = config.byteMatchTuples;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    get byteMatchTuples() {
        return this.interpolationForAttribute('byte_match_tuples');
    }
    set byteMatchTuples(value) {
        this._byteMatchTuples = value;
    }
    resetByteMatchTuples() {
        this._byteMatchTuples = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get byteMatchTuplesInput() {
        return this._byteMatchTuples;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            byte_match_tuples: cdktf.listMapper(wafregionalByteMatchSetByteMatchTuplesToTerraform)(this._byteMatchTuples),
        };
    }
}
exports.WafregionalByteMatchSet = WafregionalByteMatchSet;
_a = JSII_RTTI_SYMBOL_1;
WafregionalByteMatchSet[_a] = { fqn: "hashicorp_aws.WafregionalByteMatchSet", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FmcmVnaW9uYWwtYnl0ZS1tYXRjaC1zZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWZyZWdpb25hbC1ieXRlLW1hdGNoLXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQTJCL0IsU0FBUyw2REFBNkQsQ0FBQyxNQUEyRDtJQUNoSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7S0FDNUMsQ0FBQTtBQUNILENBQUM7QUF1QkQsU0FBUyxpREFBaUQsQ0FBQyxNQUErQztJQUN4RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDNUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDeEUsY0FBYyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNkRBQTZELENBQUMsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO0tBQ3RILENBQUE7QUFDSCxDQUFDOzs7O0FBTUQsTUFBYSx1QkFBd0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRWxFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7OztJQVNkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXFDO1FBQ3BGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsZ0NBQWdDO1lBQ3ZELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDakQsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQVEsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBK0M7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtJQUM5QixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5RyxDQUFDO0lBQ0osQ0FBQzs7QUEzRUgsMERBNEVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL3dhZnJlZ2lvbmFsX2J5dGVfbWF0Y2hfc2V0Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBXYWZyZWdpb25hbEJ5dGVNYXRjaFNldENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ5dGVNYXRjaFR1cGxlcz86IFdhZnJlZ2lvbmFsQnl0ZU1hdGNoU2V0Qnl0ZU1hdGNoVHVwbGVzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFdhZnJlZ2lvbmFsQnl0ZU1hdGNoU2V0Qnl0ZU1hdGNoVHVwbGVzRmllbGRUb01hdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gd2FmcmVnaW9uYWxCeXRlTWF0Y2hTZXRCeXRlTWF0Y2hUdXBsZXNGaWVsZFRvTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBXYWZyZWdpb25hbEJ5dGVNYXRjaFNldEJ5dGVNYXRjaFR1cGxlc0ZpZWxkVG9NYXRjaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGEpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWZyZWdpb25hbEJ5dGVNYXRjaFNldEJ5dGVNYXRjaFR1cGxlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvc2l0aW9uYWxDb25zdHJhaW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0U3RyaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRleHRUcmFuc2Zvcm1hdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmllbGRUb01hdGNoOiBXYWZyZWdpb25hbEJ5dGVNYXRjaFNldEJ5dGVNYXRjaFR1cGxlc0ZpZWxkVG9NYXRjaFtdO1xufVxuXG5mdW5jdGlvbiB3YWZyZWdpb25hbEJ5dGVNYXRjaFNldEJ5dGVNYXRjaFR1cGxlc1RvVGVycmFmb3JtKHN0cnVjdD86IFdhZnJlZ2lvbmFsQnl0ZU1hdGNoU2V0Qnl0ZU1hdGNoVHVwbGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uYWxfY29uc3RyYWludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb3NpdGlvbmFsQ29uc3RyYWludCksXG4gICAgdGFyZ2V0X3N0cmluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRTdHJpbmcpLFxuICAgIHRleHRfdHJhbnNmb3JtYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGV4dFRyYW5zZm9ybWF0aW9uKSxcbiAgICBmaWVsZF90b19tYXRjaDogY2RrdGYubGlzdE1hcHBlcih3YWZyZWdpb25hbEJ5dGVNYXRjaFNldEJ5dGVNYXRjaFR1cGxlc0ZpZWxkVG9NYXRjaFRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpZWxkVG9NYXRjaCksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBXYWZyZWdpb25hbEJ5dGVNYXRjaFNldCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBXYWZyZWdpb25hbEJ5dGVNYXRjaFNldENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3dhZnJlZ2lvbmFsX2J5dGVfbWF0Y2hfc2V0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9ieXRlTWF0Y2hUdXBsZXMgPSBjb25maWcuYnl0ZU1hdGNoVHVwbGVzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBieXRlX21hdGNoX3R1cGxlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ieXRlTWF0Y2hUdXBsZXM/OiBXYWZyZWdpb25hbEJ5dGVNYXRjaFNldEJ5dGVNYXRjaFR1cGxlc1tdO1xuICBwdWJsaWMgZ2V0IGJ5dGVNYXRjaFR1cGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdieXRlX21hdGNoX3R1cGxlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ5dGVNYXRjaFR1cGxlcyh2YWx1ZTogV2FmcmVnaW9uYWxCeXRlTWF0Y2hTZXRCeXRlTWF0Y2hUdXBsZXNbXSApIHtcbiAgICB0aGlzLl9ieXRlTWF0Y2hUdXBsZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCeXRlTWF0Y2hUdXBsZXMoKSB7XG4gICAgdGhpcy5fYnl0ZU1hdGNoVHVwbGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBieXRlTWF0Y2hUdXBsZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnl0ZU1hdGNoVHVwbGVzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgYnl0ZV9tYXRjaF90dXBsZXM6IGNka3RmLmxpc3RNYXBwZXIod2FmcmVnaW9uYWxCeXRlTWF0Y2hTZXRCeXRlTWF0Y2hUdXBsZXNUb1RlcnJhZm9ybSkodGhpcy5fYnl0ZU1hdGNoVHVwbGVzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=