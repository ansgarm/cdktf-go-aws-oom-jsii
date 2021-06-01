"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueClassifier = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function glueClassifierCsvClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_single_column: cdktf.booleanToTerraform(struct.allowSingleColumn),
        contains_header: cdktf.stringToTerraform(struct.containsHeader),
        delimiter: cdktf.stringToTerraform(struct.delimiter),
        disable_value_trimming: cdktf.booleanToTerraform(struct.disableValueTrimming),
        header: cdktf.listMapper(cdktf.stringToTerraform)(struct.header),
        quote_symbol: cdktf.stringToTerraform(struct.quoteSymbol),
    };
}
function glueClassifierGrokClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        custom_patterns: cdktf.stringToTerraform(struct.customPatterns),
        grok_pattern: cdktf.stringToTerraform(struct.grokPattern),
    };
}
function glueClassifierJsonClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        json_path: cdktf.stringToTerraform(struct.jsonPath),
    };
}
function glueClassifierXmlClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        row_tag: cdktf.stringToTerraform(struct.rowTag),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier}.
 */
class GlueClassifier extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_classifier',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
        this._csvClassifier = config.csvClassifier;
        this._grokClassifier = config.grokClassifier;
        this._jsonClassifier = config.jsonClassifier;
        this._xmlClassifier = config.xmlClassifier;
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
    get csvClassifier() {
        return this.interpolationForAttribute('csv_classifier');
    }
    set csvClassifier(value) {
        this._csvClassifier = value;
    }
    resetCsvClassifier() {
        this._csvClassifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get csvClassifierInput() {
        return this._csvClassifier;
    }
    get grokClassifier() {
        return this.interpolationForAttribute('grok_classifier');
    }
    set grokClassifier(value) {
        this._grokClassifier = value;
    }
    resetGrokClassifier() {
        this._grokClassifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get grokClassifierInput() {
        return this._grokClassifier;
    }
    get jsonClassifier() {
        return this.interpolationForAttribute('json_classifier');
    }
    set jsonClassifier(value) {
        this._jsonClassifier = value;
    }
    resetJsonClassifier() {
        this._jsonClassifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jsonClassifierInput() {
        return this._jsonClassifier;
    }
    get xmlClassifier() {
        return this.interpolationForAttribute('xml_classifier');
    }
    set xmlClassifier(value) {
        this._xmlClassifier = value;
    }
    resetXmlClassifier() {
        this._xmlClassifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get xmlClassifierInput() {
        return this._xmlClassifier;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            csv_classifier: cdktf.listMapper(glueClassifierCsvClassifierToTerraform)(this._csvClassifier),
            grok_classifier: cdktf.listMapper(glueClassifierGrokClassifierToTerraform)(this._grokClassifier),
            json_classifier: cdktf.listMapper(glueClassifierJsonClassifierToTerraform)(this._jsonClassifier),
            xml_classifier: cdktf.listMapper(glueClassifierXmlClassifierToTerraform)(this._xmlClassifier),
        };
    }
}
exports.GlueClassifier = GlueClassifier;
_a = JSII_RTTI_SYMBOL_1;
GlueClassifier[_a] = { fqn: "hashicorp_aws.GlueClassifier", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1jbGFzc2lmaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2x1ZS1jbGFzc2lmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBNkQvQixTQUFTLHNDQUFzQyxDQUFDLE1BQW9DO0lBQ2xGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RSxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEUsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3JELHNCQUFzQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDOUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUNqRSxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFpQkQsU0FBUyx1Q0FBdUMsQ0FBQyxNQUFxQztJQUNwRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUMvRCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEUsWUFBWSxFQUFFLEtBQUss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Q0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDN0YsZUFBZSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ2hHLGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHVDQUF1QyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNoRyxjQUFjLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDOUYsQ0FBQztJQUNKLENBQUM7O0FBaklILHdDQWtJQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9nbHVlX2NsYXNzaWZpZXIuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEdsdWVDbGFzc2lmaWVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjc3ZDbGFzc2lmaWVyPzogR2x1ZUNsYXNzaWZpZXJDc3ZDbGFzc2lmaWVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3Jva0NsYXNzaWZpZXI/OiBHbHVlQ2xhc3NpZmllckdyb2tDbGFzc2lmaWVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkganNvbkNsYXNzaWZpZXI/OiBHbHVlQ2xhc3NpZmllckpzb25DbGFzc2lmaWVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgeG1sQ2xhc3NpZmllcj86IEdsdWVDbGFzc2lmaWVyWG1sQ2xhc3NpZmllcltdO1xufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlQ2xhc3NpZmllckNzdkNsYXNzaWZpZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvd1NpbmdsZUNvbHVtbj86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250YWluc0hlYWRlcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGltaXRlcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGlzYWJsZVZhbHVlVHJpbW1pbmc/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhZGVyPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBxdW90ZVN5bWJvbD86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2x1ZUNsYXNzaWZpZXJDc3ZDbGFzc2lmaWVyVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZUNsYXNzaWZpZXJDc3ZDbGFzc2lmaWVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsbG93X3NpbmdsZV9jb2x1bW46IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG93U2luZ2xlQ29sdW1uKSxcbiAgICBjb250YWluc19oZWFkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbnNIZWFkZXIpLFxuICAgIGRlbGltaXRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxpbWl0ZXIpLFxuICAgIGRpc2FibGVfdmFsdWVfdHJpbW1pbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRpc2FibGVWYWx1ZVRyaW1taW5nKSxcbiAgICBoZWFkZXI6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaGVhZGVyKSxcbiAgICBxdW90ZV9zeW1ib2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucXVvdGVTeW1ib2wpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZUNsYXNzaWZpZXJHcm9rQ2xhc3NpZmllciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xhc3NpZmljYXRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbVBhdHRlcm5zPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3Jva1BhdHRlcm46IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2x1ZUNsYXNzaWZpZXJHcm9rQ2xhc3NpZmllclRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVDbGFzc2lmaWVyR3Jva0NsYXNzaWZpZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2xhc3NpZmljYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xhc3NpZmljYXRpb24pLFxuICAgIGN1c3RvbV9wYXR0ZXJuczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21QYXR0ZXJucyksXG4gICAgZ3Jva19wYXR0ZXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb2tQYXR0ZXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdsdWVDbGFzc2lmaWVySnNvbkNsYXNzaWZpZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkganNvblBhdGg6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2x1ZUNsYXNzaWZpZXJKc29uQ2xhc3NpZmllclRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVDbGFzc2lmaWVySnNvbkNsYXNzaWZpZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAganNvbl9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmpzb25QYXRoKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdsdWVDbGFzc2lmaWVyWG1sQ2xhc3NpZmllciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xhc3NpZmljYXRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm93VGFnOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdsdWVDbGFzc2lmaWVyWG1sQ2xhc3NpZmllclRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVDbGFzc2lmaWVyWG1sQ2xhc3NpZmllcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbGFzc2lmaWNhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbGFzc2lmaWNhdGlvbiksXG4gICAgcm93X3RhZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb3dUYWcpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBHbHVlQ2xhc3NpZmllciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdsdWVDbGFzc2lmaWVyQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZ2x1ZV9jbGFzc2lmaWVyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9jc3ZDbGFzc2lmaWVyID0gY29uZmlnLmNzdkNsYXNzaWZpZXI7XG4gICAgdGhpcy5fZ3Jva0NsYXNzaWZpZXIgPSBjb25maWcuZ3Jva0NsYXNzaWZpZXI7XG4gICAgdGhpcy5fanNvbkNsYXNzaWZpZXIgPSBjb25maWcuanNvbkNsYXNzaWZpZXI7XG4gICAgdGhpcy5feG1sQ2xhc3NpZmllciA9IGNvbmZpZy54bWxDbGFzc2lmaWVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBjc3ZfY2xhc3NpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jc3ZDbGFzc2lmaWVyPzogR2x1ZUNsYXNzaWZpZXJDc3ZDbGFzc2lmaWVyW107XG4gIHB1YmxpYyBnZXQgY3N2Q2xhc3NpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjc3ZfY2xhc3NpZmllcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNzdkNsYXNzaWZpZXIodmFsdWU6IEdsdWVDbGFzc2lmaWVyQ3N2Q2xhc3NpZmllcltdICkge1xuICAgIHRoaXMuX2NzdkNsYXNzaWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDc3ZDbGFzc2lmaWVyKCkge1xuICAgIHRoaXMuX2NzdkNsYXNzaWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNzdkNsYXNzaWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2Q2xhc3NpZmllclxuICB9XG5cbiAgLy8gZ3Jva19jbGFzc2lmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dyb2tDbGFzc2lmaWVyPzogR2x1ZUNsYXNzaWZpZXJHcm9rQ2xhc3NpZmllcltdO1xuICBwdWJsaWMgZ2V0IGdyb2tDbGFzc2lmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2dyb2tfY2xhc3NpZmllcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGdyb2tDbGFzc2lmaWVyKHZhbHVlOiBHbHVlQ2xhc3NpZmllckdyb2tDbGFzc2lmaWVyW10gKSB7XG4gICAgdGhpcy5fZ3Jva0NsYXNzaWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHcm9rQ2xhc3NpZmllcigpIHtcbiAgICB0aGlzLl9ncm9rQ2xhc3NpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3Jva0NsYXNzaWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3Jva0NsYXNzaWZpZXJcbiAgfVxuXG4gIC8vIGpzb25fY2xhc3NpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9qc29uQ2xhc3NpZmllcj86IEdsdWVDbGFzc2lmaWVySnNvbkNsYXNzaWZpZXJbXTtcbiAgcHVibGljIGdldCBqc29uQ2xhc3NpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdqc29uX2NsYXNzaWZpZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBqc29uQ2xhc3NpZmllcih2YWx1ZTogR2x1ZUNsYXNzaWZpZXJKc29uQ2xhc3NpZmllcltdICkge1xuICAgIHRoaXMuX2pzb25DbGFzc2lmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnNvbkNsYXNzaWZpZXIoKSB7XG4gICAgdGhpcy5fanNvbkNsYXNzaWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpzb25DbGFzc2lmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25DbGFzc2lmaWVyXG4gIH1cblxuICAvLyB4bWxfY2xhc3NpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF94bWxDbGFzc2lmaWVyPzogR2x1ZUNsYXNzaWZpZXJYbWxDbGFzc2lmaWVyW107XG4gIHB1YmxpYyBnZXQgeG1sQ2xhc3NpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd4bWxfY2xhc3NpZmllcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHhtbENsYXNzaWZpZXIodmFsdWU6IEdsdWVDbGFzc2lmaWVyWG1sQ2xhc3NpZmllcltdICkge1xuICAgIHRoaXMuX3htbENsYXNzaWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRYbWxDbGFzc2lmaWVyKCkge1xuICAgIHRoaXMuX3htbENsYXNzaWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHhtbENsYXNzaWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5feG1sQ2xhc3NpZmllclxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIGNzdl9jbGFzc2lmaWVyOiBjZGt0Zi5saXN0TWFwcGVyKGdsdWVDbGFzc2lmaWVyQ3N2Q2xhc3NpZmllclRvVGVycmFmb3JtKSh0aGlzLl9jc3ZDbGFzc2lmaWVyKSxcbiAgICAgIGdyb2tfY2xhc3NpZmllcjogY2RrdGYubGlzdE1hcHBlcihnbHVlQ2xhc3NpZmllckdyb2tDbGFzc2lmaWVyVG9UZXJyYWZvcm0pKHRoaXMuX2dyb2tDbGFzc2lmaWVyKSxcbiAgICAgIGpzb25fY2xhc3NpZmllcjogY2RrdGYubGlzdE1hcHBlcihnbHVlQ2xhc3NpZmllckpzb25DbGFzc2lmaWVyVG9UZXJyYWZvcm0pKHRoaXMuX2pzb25DbGFzc2lmaWVyKSxcbiAgICAgIHhtbF9jbGFzc2lmaWVyOiBjZGt0Zi5saXN0TWFwcGVyKGdsdWVDbGFzc2lmaWVyWG1sQ2xhc3NpZmllclRvVGVycmFmb3JtKSh0aGlzLl94bWxDbGFzc2lmaWVyKSxcbiAgICB9O1xuICB9XG59XG4iXX0=